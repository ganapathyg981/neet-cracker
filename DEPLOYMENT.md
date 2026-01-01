# Deployment Guide - NEET Cracker

This React SPA uses client-side routing (React Router). To ensure all routes work correctly when accessed directly, the server must be configured to always serve `index.html` for all routes.

## ✅ Configurations Included

### 1. **Netlify** (Recommended)
File: `netlify.toml` ✅ Already configured
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
**No additional setup needed!** Just deploy to Netlify.

### 2. **Vercel**
File: `vercel.json` ✅ Already configured
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
**No additional setup needed!** Just deploy to Vercel.

### 3. **Apache Server**
File: `public/.htaccess` ✅ Already configured

The `.htaccess` file will be automatically copied to the build folder.

**Requirements:**
- `mod_rewrite` module must be enabled
- `.htaccess` files must be allowed (`AllowOverride All`)

### 4. **Nginx**
File: `nginx.conf` ✅ Reference configuration provided

**Setup:**
1. Copy the built files to your web root (e.g., `/usr/share/nginx/html`)
2. Use the provided `nginx.conf` or add this to your existing config:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
3. Reload nginx: `sudo nginx -s reload`

### 5. **Local Development**
Vite dev server is already configured with `historyApiFallback: true`

Just run:
```bash
npm run dev
```
All routes will work correctly!

## 🚀 Build and Deploy

### Build
```bash
npm run build
```

### Preview locally
```bash
npm run preview
```

### Deploy to Netlify (Easy!)
1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Done! ✅

### Deploy to Vercel (Easy!)
1. Push to GitHub
2. Connect to Vercel
3. Framework: Vite
4. Done! ✅

### Deploy to Custom Server

#### Using Apache:
```bash
# Build
npm run build

# Copy to web root
sudo cp -r dist/* /var/www/html/

# .htaccess is already included in dist/
```

#### Using Nginx:
```bash
# Build
npm run build

# Copy to web root
sudo cp -r dist/* /usr/share/nginx/html/

# Update nginx config to include:
# location / { try_files $uri $uri/ /index.html; }

# Reload nginx
sudo nginx -s reload
```

## 🔍 Testing Direct Route Access

After deployment, test these URLs directly:

- `/` - Home page
- `/study` - Study page
- `/study/physics` - Physics chapter list
- `/study/physics/gravitation` - Gravitation topic
- `/practice` - Practice page
- `/mock-test` - Mock test page
- `/progress` - Progress page

All should load correctly without 404 errors!

## ❌ Common Issues

### Problem: 404 on direct route access
**Solution:** Server not configured for SPA routing. Follow the appropriate configuration above for your server.

### Problem: .htaccess not working
**Solution:**
- Ensure `mod_rewrite` is enabled: `sudo a2enmod rewrite`
- Check `AllowOverride All` in Apache config
- Restart Apache: `sudo systemctl restart apache2`

### Problem: Works on dev, breaks on production
**Solution:** Production server needs SPA routing configuration. Use the appropriate config file for your hosting platform.

## 📊 Current Stats

- **Total Questions:** 835
- **Chapters:** 5 (Gravitation, Current Electricity, Ray Optics, Electrostatic Potential, Semiconductor)
- **Topics:** 25+
- **Formulas Covered:** 100+

## 🎯 Routes in the App

```
/                          - Home page
/study                     - Subject selection
/study/:subject            - Chapter list
/study/:subject/:chapter   - Topic list
/study/:subject/:chapter/:topic - Topic detail (formulas, theory, questions)
/practice                  - Practice mode
/mock-test                 - Mock test
/progress                  - Progress tracking
```

All routes use React Router's client-side routing and require proper server configuration to work when accessed directly.
