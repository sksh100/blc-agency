# Domain Setup Guide for www.blc-agency.com

## Connecting Your Domain to Vercel

Since you purchased `blc-agency.com` on Vercel, follow these steps:

### Step 1: Add Domain in Vercel Dashboard

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your `blc-agency` project
3. Navigate to **Settings** → **Domains**
4. Add both domains:
   - `blc-agency.com` (root domain)
   - `www.blc-agency.com` (www subdomain)

### Step 2: Configure DNS (if purchased on Vercel, this may be automatic)

If you bought the domain on Vercel, DNS configuration might be automatic. However, if you need to configure manually:

#### For www.blc-agency.com:
- **Type**: CNAME
- **Name**: www
- **Value**: `cname.vercel-dns.com`

#### For blc-agency.com (root domain):
- **Type**: A Record
- **Name**: @ (or blank)
- **Value**: Vercel's IP addresses (provided in dashboard)

OR use Vercel's Nameservers:
- Update your domain's nameservers to Vercel's nameservers (provided in dashboard)

### Step 3: Enable Redirects (Recommended)

Vercel will automatically redirect:
- `blc-agency.com` → `www.blc-agency.com` (or vice versa, based on your preference)

You can configure this in:
**Settings** → **Domains** → Select domain → **Configuration**

### Step 4: Wait for DNS Propagation

- DNS changes can take 24-48 hours to propagate globally
- Usually takes 5-10 minutes, but can vary
- Check propagation status using tools like:
  - https://www.whatsmydns.net/
  - https://dnschecker.org/

### Step 5: Verify SSL Certificate

- Vercel automatically provisions SSL certificates via Let's Encrypt
- HTTPS will be enabled automatically once DNS is configured
- No additional action needed

### Step 6: Test Your Domain

Once DNS propagates:
1. Visit `https://www.blc-agency.com` (wait for HTTPS)
2. Test all pages to ensure everything works
3. Check that all links and navigation work correctly

## Troubleshooting

### Domain not working?
1. Check DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Clear your browser cache
4. Try accessing from a different network/device

### SSL Certificate issues?
1. Vercel automatically provisions SSL
2. If issues persist, wait 24 hours and contact Vercel support

### Need to change redirects?
- Go to **Settings** → **Domains**
- Configure redirects for root domain to www or vice versa

## Support

If you encounter issues:
- Check Vercel's [Domain Documentation](https://vercel.com/docs/concepts/projects/domains)
- Contact Vercel Support through your dashboard

