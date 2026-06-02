أبي موقع لبراند ملابس بهذا النظام الكامل:

=== STACK ===
- Frontend: HTML + CSS + JavaScript (ملفات ثابتة)
- Backend: Supabase (قاعدة بيانات + Auth)
- Hosting: Vercel
- بدون React أو أي framework

=== الملفات ===
index.html       → الصفحة الرئيسية + المنتجات
login.html       → تسجيل الدخول
register.html    → إنشاء حساب
checkout.html    → إتمام الطلب + طرق الدفع
admin/index.html → لوحة تحكم (محمية بالأدمن)
js/supabase.js   → إعدادات Supabase
js/auth.js       → نظام المستخدمين
js/products.js   → جلب المنتجات
js/cart.js       → السلة (localStorage)

=== قاعدة البيانات (Supabase) ===
جدول products:  id, game, title, price, old_price, category, region, icon, badge, img_class, in_stock
جدول orders:    id, user_id, product_id, product_title, amount, status
=== الميزات ===
- عرض المنتجات من Supabase
- فلترة + بحث
- سلة تتحفظ في localStorage
- Login/Register بدون تأكيد إيميل
- Admin محمي بـ (admin@...) فقط
- لوحة تحكم: إضافة/تعديل/حذف منتجات
- Booking System مع اختيار وقت
- Checkout مع طرق دفع متعددة
- تصميم داكن (Dark Theme)
- ريسبونسيف للموبايل
-بدون emojys نحب SVGs
=== الإعدادات ===
- الأدمن: admin@[اسم الموقع].com
- تأكيد الإيميل: معطّل
- Row Level Security: مفعّل

=== التصميم ===
- Dark Theme: انت ادري
- اللون الرئيسي: نفس لون اللوجو
- خط: انت ادري
- خط عناوين: انت ادري
- الاتجاه: انت ادري

=== نوع الموقع ===
[براند ملابس (نقش اسلامي)]
=== اسم الموقع ===
حبر(7EBR)

=== اللغة ===
[فرنسي]

=== Supabase Keys ===
URL: https://gcpoafwtgywockuzccrp.supabase.co/rest/v1/
Anon Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjcG9hZnd0Z3l3b2NrdXpjY3JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0MDg2OTgsImV4cCI6MjA5NTk4NDY5OH0.PH4L1QeARNBnV9dSPvgV7XjXVEHSX9iOL4SwuVgh8B8

ملاحضة 
الصورة الي ارسلته لك هي صفحة index الرئيسية
 نحبك تعملي نسة منها و كل الصفحات لازم يتم استيحائها منها وخلي فوق مكان اللوجو باسم logo.jpeg
لازم كل منتج عند الضغط عليه يدخلك لصفحة فيها وصف واسعار وطلب سريع او علي واتساب الطلب السريع يكون عبر emailjs

supabase acc : opbrkaizoku@gmail.com
supabase pw : AbdouKriaa1@
Vercel acc : github chi5444 (kontfree99@gmail.com)
website Domain :7ebr.store

 emailjs : serviceid = service_j1bb6fq |Template ID = | Public Key = 