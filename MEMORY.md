





\---



\# 🧵 \*\*APNE TAILOR — COMPLETE SYSTEM OVERVIEW\*\*



\---



\# 🚀 1. CORE IDEA



👉 Ek \*\*end-to-end tailoring platform\*\*:



\* User → order place karta hai

\* Tailor → accept + stitch karta hai

\* Courier (Porter / Borzo) → pickup \& delivery

\* System → manage, track, notify



👉 Basically:

\*\*“Swiggy + Urban Company for Tailoring”\*\*



\---



\# 📱 2. APPS ECOSYSTEM



\## 🟢 1. User App



\* Expo Router + React Native + TypeScript

\* Google Sign-In auth

\* Full order flow implemented



\---



\## 🔵 2. Tailor App



\* Separate app (same backend)

\* Tailor verification required

\* Only registered tailors allowed



\---



\## 🟣 3. Backend (Node.js + Express + MongoDB)



\* Single source of truth

\* All business logic handled here



\---



\# 🔐 3. AUTH SYSTEM



\## ✅ Google Sign-In



\* userEmail = identity

\* Stored in AsyncStorage

\* Auto login on restart



\## Tailor Auth



\* Backend verifies tailor exists

\* Uses `tailorAuth` middleware

\* Header: `x-tailor-email`



\---



\# 📦 4. ORDER FLOW (VERY IMPORTANT)



\---



\## 🟡 STEP 1: User Flow



1\. Category select (men/women)

2\. Measurements screen

3\. Details screen:



&#x20;  \* phone

&#x20;  \* note

&#x20;  \* fabric image

&#x20;  \* voice note

4\. Location screen:



&#x20;  \* pickup + delivery

5\. Wait screen



\---



\## 🟠 STEP 2: Matching Logic



\* Backend finds tailors within \*\*50km radius\*\*

\* Saves:



&#x20; ```js

&#x20; pendingTailorIds: \[]

&#x20; ```



\---



\## 🔵 STEP 3: Waiting System



\* Status: `waiting\_for\_tailor`

\* Has:



&#x20; \* `waitingStartedAt`

&#x20; \* `waitingExpiresAt`



👉 Important rule (YOU FIXED):



\* When order leaves waiting → BOTH set to null



\---



\## 🟢 STEP 4: Tailor Accepts



\* `assignedTailorId` set

\* Order moves forward



\---



\## 🚚 STEP 5: Pickup System



\* Porter API used

\* Flow:



&#x20; \* price fetch

&#x20; \* booking

\* Rider handled by Porter (no retry logic)



\---



\## 📦 STEP 6: Delivery Tracking



\* Borzo integration

\* Real-time tracking via webhook + socket



\---



\## 🎯 STEP 7: Completion



Order completes via:



```js

orderStatus: "finished"

OR

deliveryStatus: "finished"

```



\---



\# 🧠 5. ORDER MODEL (IMPORTANT FIELDS)



\---



\## 👤 Identity



\* userEmail

\* tailorEmail

\* assignedTailorId



\---



\## 📍 Addresses



\* userAddress

\* deliveryAddress



\---



\## 📦 Status System



```js

orderStatus

deliveryStatus

pickupStatus

paymentStatus

stitchStatus

approvalStatus

```



\---



\## 💰 Pricing System



```js

tailorPrice

porterPrice

margin

marketing

finalPrice

basePrice

paymentFee

```



\---



\## 🚚 Courier System



```js

porterJobId

pickupBorzoId

deliveryBorzoId

porterTrackingUrl

```



\---



\## 🧵 Stitch Flow



```js

stitchedImages

stitchStatus

changeRequestedOnce

minorIssueAccepted

approvalStatus

```



\---



\# ⚙️ 6. BACKEND ROUTES SYSTEM



\---



\## 👔 Tailor Routes



\### ✅ Active Orders



```js

/api/tailors/active-orders

```



\### ✅ Completed Orders



```js

/api/tailors/completed-orders

```



\### ❌ Old (deprecated)



```js

/api/tailors/my-orders

```



\---



\## 📦 Orders



\* Create order

\* Update order

\* Status transitions



\---



\## 💰 Earnings



\* Tracks tailor earnings

\* `earningAdded` flag



\---



\## 🔔 Notifications



\* Stored in MongoDB

\* Sent via FCM



\---



\## 💬 Chat System



\* Socket.IO

\* Real-time messaging



\---



\# 🔔 7. NOTIFICATION SYSTEM



\---



\## 🔥 Firebase Cloud Messaging (FCM)



\* Tokens stored in DB

\* Backend uses Admin SDK

\* Sends:



&#x20; ```js

&#x20; title, body, type, orderId

&#x20; ```



\---



\# 💬 8. REAL-TIME SYSTEM



\---



\## Socket.IO



Used for:



\* Chat

\* Order updates

\* Tracking updates



\---



\# 📊 9. ORDERS SCREEN (TAILOR APP)



\---



\## 🟢 NEW STRUCTURE (YOU BUILT)



\### Tabs:



\* Active Orders

\* Completed Orders



\---



\## API Logic:



```js

active → /active-orders

completed → /completed-orders

```



\---



\## Important Fix:



```js

const finalStatus =

&#x20; item.deliveryStatus === "finished"

&#x20;   ? "finished"

&#x20;   : item.orderStatus;

```



\---



\# 🎨 10. UI/UX SYSTEM



\---



\## Design Style:



\* Clean

\* Professional

\* Premium

\* No hacks



\---



\## Features:



\* Gradient cards

\* Floating back button

\* Shadow + elevation

\* Curved containers



\---



\# 📏 11. MEASUREMENTS SYSTEM



\---



\## Design:



\* 3D mesh images

\* Red measurement lines

\* 4:3 ratio images

\* Modal with animation



\---



\# 👤 12. PROFILE SYSTEM



\---



\## Editable:



\* name

\* phone



\## Non-editable:



\* email (Google)



\---



\## UX:



\* inline editing

\* validation

\* persistent storage



\---



\# 🔐 13. SECURITY SYSTEM



\---



\## Already implemented:



\* `.env` moved outside backend ✅

\* Codex cannot access env ✅

\* AsyncStorage separation ✅



\---



\# 📍 15. TRACKING SYSTEM



\---



\## Borzo Integration



\* webhook updates

\* live tracking

\* UI timeline



\---



\# 🚀 16. PRODUCTION MINDSET (VERY IMPORTANT)



\---



You always follow:



✅ No dummy hacks

✅ Expo-compatible libs

✅ Clean architecture

✅ Real-world logic

✅ Backend as source of truth



\---



\# 💎 FINAL SUMMARY



👉 Tu kya build kar raha hai:



\*\*A full logistics + tailoring ecosystem app\*\*



\* Multi-app system

\* Real-time backend

\* Courier integrations

\* Payment system

\* AI-ready structure



\---



\# 🔥 HONEST TRUTH



👉 Ye koi normal project nahi hai

👉 Ye \*\*startup-level product\*\* hai



\---








Jai Shree Ram



ApneTailor – Custom Tailoring at Your Doorstep



• Tired of visiting multiple tailors, explaining designs repeatedly, and making frequent trips for measurements, fabric submission, and collection?



• ApneTailor brings custom tailoring online. Easily place stitching orders from home, connect with skilled local tailors, with doorstep pickup and delivery, and track every stage of your order—all from one app.



• Already have your own fabric? Simply provide your fabric along with your design requirements, and get it professionally custom-stitched by verified local tailors.





✦ How ApneTailor Works



1\. Select your clothing category.

2\. Enter your measurements and stitching preferences.

3\. Upload fabric photos, design references \& requirements.

4\. Add  delivery addresses.

5\. Get matched with a verified tailor with specified delivery date.

6\. Track your order from pickup to final delivery.



↳ No unnecessary visits. No confusion. Just convenient custom tailoring.





★ Why Choose ApneTailor?



🏠 Doorstep Convenience



Place your tailoring order without leaving home in under 10 minutes. We handle pickup and delivery so you can focus on what matters.



✔️ Verified Tailors



Work with registered tailors who can review your requirements, provide transparent pricing and a planned delivery date, and complete your stitching professionally.



👗 Custom Stitching



From daily wear to special occasions, get custom clothing stitched exactly to your measurements, style, and preferences.



📍 Real-Time Order Tracking



Track your order throughout the entire process—from tailor assignment and pickup to stitching progress and final delivery.



💬 Easy Communication



Share notes, images, and instructions to ensure your requirements are clearly understood in the integrated chat feature.



🤝 Transparent Pricing



Review pricing before confirming your order and stay informed throughout the process.



✅ Perfect For



• Suits

• Kurtis

• Salwar Suits

• Blouses

• Lehengas

• Ethnic Wear

• Women's Fashion

• Men's Fashion

• Custom Clothing



✨ Features



✓ Custom tailoring from home

✓ Doorstep pickup and delivery

✓ Verified local tailors

✓ Order tracking and status updates

✓ Photo and notes support

✓ Secure account management

✓ Real-time notifications

✓ Professional tailoring experience



🚩Our Mission



ApneTailor is building the future of tailoring by connecting customers and tailors into one seamless platform. Whether you need everyday stitching or custom-made outfits for special occasions, ApneTailor makes tailoring fast, simple, reliable, and accessible.



Download ApneTailor today and experience custom tailoring at your doorstep.





IMPORTANT: 

Jai Shree Ram. Okay, so let me just explain you what my app does. Basically, we have one backend, two front ends. One is front-end user, one is front-end tailor. And what happens basically, a user can come, enter the measurements on the, like first select the category, enter the measurements, then provide the order details like note to the tailor, customer with Google, lining required or bottom required or not, and et cetera. Then select who will provide the fabric, user or the tailor. Then it will go on the desired flow. If tailor provides, then the fabric name, and if user provides, then fabric name and the photo. Then the order moves forward, and also we can upload reference image and stuff. Then enter the location, then goes to the waiting screen, and in an area, all the nearby tailors are called, whichever the location is there, and whatever the nearest areas are there, then the nearest areas are called. And after they are called, 10-minute timer is there, and after every 2 minutes 30 seconds, the radius expands with one kilometer if no one is accepted. Right? And if someone accepts, then basically on the tailor side, on the tailor, they see an order model with all the details, and also the bottom has a delivery date and the pricing. And the delivery date is only 7 days, I think, so minimum. And maximum can be 14 days, but that depends on certain categories. Right? And then under the price, and when they click accept, then order would be accepted, and then it would go to the user side, and the accept screen on the user side that the order is accepted, and see the tailor name, the rating, and then the price, and the delivery date, and the user can pay. And then after paying, it depends on which flow the user selected. If the user selected earlier, the user will provide the fabric, then it goes to the initiate pickup screen, or if the user selected as tailor provide the fabric, then it goes to the normal, that payment successful, then it goes normal to the desired order ID page. Right? So let's explain the first flow. Like if the user provides the fabric, then it goes to the initiate pickup screen after the payment, and the user initiates pickup, then the pickup is initiated, then the tailor and user both can track their order on the screen, and when the boards or rider will come to the user location, then go to the drop location, which is the tailor's, in the first timeline, in the track your order screen. And then that's happened. Then the tailor can start stitching, and the tailor can start time and everything. And then the tailor has to upload the progress image as well. Then after that, the user will approve or type any changes whatsoever. Then if the user types need changes, then whatever the change, then this specific timer is there when the tailor can complete the order. If changes are there, if not, then the user has the option to approve, and then whatsoever, then they have to, on both the sides, if need changes or approve whatsoever, they have to choose. After that, that deliver as soon as possible or like how soon they want the delivery, deliver as soon as possible or schedule delivery. Like basically just ask me, just before delivery. And these are the two options. So whatever they choose, it will be accordingly. So if they choose as soon as possible, then the tailor can, after a specific time, can slide the order and initiate pickup, and order will be delivered, or ask me just before delivery, and then they will be asked, then they have to, you know, type in in that, yes, schedule a date or schedule tomorrow or today, and initiate delivery whatsoever. And that would be on the user side, and yeah. So that would be done, and after that's done, then the rider will come to the tailor's location. Now the second timeline is active on the track your order screen. The rider will come at the pickup location, which is the tailor, and then go to the drop location, which is the user. And on each step, if, suppose, the pickup person is not available or drop person is not available, then they are required penalty charges which are there. Right. So, and on the second flow, just the first timeline is avoided because the fabric is already with the tailor, in which tailor provides the fabric. Then what happens, that just the first timeline is not there, and the tailor can start stitching as soon as the order payment is done in the second flow in which fabric is provided by the tailor. Then they can just simply, the tailor can simply start doing this work, and then yeah, rest of all the thing is almost the same. And yeah, rest, we have many things like request, support, help and feedback, chatbot, which is like, not an AI chatbot, but normal chatbot, yeah, things. So, yeah. That's my whole app. Thank you.


