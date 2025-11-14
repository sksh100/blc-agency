# Deployment Checklist - Fix "Safari Can't Find Server"

## Issue: Domain not resolving

If Safari says "can't find server", it means DNS isn't configured yet. Follow these steps:

## Step 1: Check Vercel Deployment First

Before checking your custom domain, verify the site works on Vercel's default URL:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your `blc-agency` project
3. Click on it to see recent deployments
4. Click on the latest deployment
5. You should see a URL like: `blc-agency-xxx.vercel.app`
6. Click that URL to verify the site loads

**If the Vercel URL works, your code is fine - it's just a domain issue.**

## Step 2: Configure Domain in Vercel

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Add your domain: `www.blc-agency.com`
3. Also add: `blc-agency.com` (root domain)
4. Vercel will show you DNS configuration instructions

## Step 3: Configure DNS Records

Since you bought the domain on Vercel, it should be easier:

### Option A: Use Vercel Nameservers (Recommended)
1. In Vercel Domains settings, find your domain
2. Go to your domain registrar (where you bought it)
3. Update nameservers to Vercel's nameservers (shown in Vercel dashboard)
4. Wait 5-30 minutes for DNS propagation

### Option B: Configure DNS Records Manually

If Vercel doesn't manage nameservers automatically:

**For www.blc-agency.com:**
- Type: **CNAME**
- Name: `www`
- Value: `cname.vercel-dns.com`

**For blc-agency.com (root):**
- Type: **A Record**
- Name: `@` (or blank/root)
- Value: Vercel IP addresses (shown in dashboard)

## Step 4: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours**
- Usually works within **10-30 minutes**
- Test using: https://www.whatsmydns.net/#CNAME/www.blc-agency.com

## Step 5: Verify SSL Certificate

1. Vercel automatically provisions SSL (Let's Encrypt)
2. Wait 5-10 minutes after DNS is configured
3. Visit: `https://www.blc-agency.com`
4. If SSL isn't ready, you'll see an error - wait a bit longer

## Troubleshooting

### Still Can't Access?

1. **Check DNS propagation:**
   - Visit: https://dnschecker.org/#CNAME/www.blc-agency.com
   - Should show `cname.vercel-dns.com` globally

2. **Check Vercel deployment:**
   - Make sure latest deployment shows "Ready" status
   - Check deployment logs for errors

3. **Clear browser cache:**
   - Safari: Cmd+Shift+R (hard refresh)
   - Or try incognito/private browsing

4. **Try different network:**
   - Switch to mobile data or different WiFi
   - Some networks cache DNS longer

5. **Check domain status in Vercel:**
   - Settings → Domains
   - Should show "Valid Configuration" for both domains
   - If showing "Invalid Configuration", check DNS records

### If Vercel URL Doesn't Work

1. Check deployment logs in Vercel dashboard
2. Look for build errors
3. Run `npm run build` locally to test
4. Check GitHub repository is connected correctly

## Quick Test URLs

Try these in order:
1. `https://blc-agency-xxx.vercel.app` (Vercel default URL - check dashboard)
2. `http://www.blc-agency.com` (may not work until DNS configured)
3. `https://www.blc-agency.com` (should work after DNS + SSL configured)

## Need Help?

- Vercel Dashboard: https://vercel.com/dashboard
- Vercel Docs: https://vercel.com/docs/concepts/projects/domains
- Check deployment status in your Vercel project

