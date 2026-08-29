import type { Article } from "@/lib/validation/content";
import { articleSchema } from "@/lib/validation/content";

const articles: Article[] = [
  {
    slug: "how-can-i-get-clothes-stitched-from-home",
    title: "How Can I Get Clothes Stitched From Home?",
    primaryQuestion: "How can I get clothes stitched from home?",
    description:
      "Learn how to get custom clothes stitched from home using online tailoring platforms, what to prepare, and what to expect from the process.",
    publishedAt: "2026-07-14",
    updatedAt: "2026-07-14",
    author: "ApneTailor Editorial Team",
    category: "Online Tailoring",
    tags: ["home stitching", "online tailor", "custom clothing"],
    canonicalPath: "/blog/how-can-i-get-clothes-stitched-from-home/",
    indexable: true,
    relatedServices: ["suit", "kurti", "blouse"],
    content: [
      {
        type: "paragraph",
        text: "You can get clothes stitched from home by using an online tailoring platform that connects you with local tailors, handles measurements digitally, arranges fabric pickup and delivery, and lets you track the entire stitching process from your phone."
      },
      {
        type: "heading",
        level: 2,
        text: "What You Need to Get Started"
      },
      {
        type: "list",
        items: [
          "Your body measurements for the garment you want stitched",
          "Design references or style preferences (photos, notes, or descriptions)",
          "Fabric — either your own or sourced by the tailor",
          "A delivery address for pickup and final delivery",
          "A smartphone with the tailoring app installed"
        ]
      },
      {
        type: "heading",
        level: 2,
        text: "How the Home Stitching Process Works"
      },
      {
        type: "paragraph",
        text: "The typical flow starts with selecting your garment type and entering measurements in the app. You then provide tailoring details — notes, design preferences, lining choices, and fabric responsibility. After sharing your location, nearby tailors can respond with pricing and expected completion dates. Once you review and pay, the tailor begins work. If you are providing the fabric, a pickup is arranged to deliver it to the tailor. Throughout stitching, you receive progress updates and can communicate through the app. When the garment is ready, it is delivered to your doorstep."
      },
      {
        type: "heading",
        level: 2,
        text: "Advantages of Stitching From Home"
      },
      {
        type: "list",
        items: [
          "No need to visit multiple tailors in person",
          "Measurements and requirements captured digitally",
          "Transparent pricing and delivery date before you commit",
          "Doorstep pickup and delivery",
          "Progress visibility during stitching",
          "Ability to request changes before final delivery"
        ]
      },
      {
        type: "heading",
        level: 2,
        text: "Things to Keep in Mind"
      },
      {
        type: "paragraph",
        text: "Accurate measurements are essential for a good fit. Take time to measure carefully or use a well-fitting garment as reference. Clear design references help tailors understand your expectations. Understand the fabric flow — whether you or the tailor provides fabric affects the timeline and logistics. And check whether the service is available in your area before placing an order."
      }
    ],
    faqs: [
      {
        question: "Do I need to visit a tailor in person?",
        answer: "No. With platforms like ApneTailor, the entire process — from measurements to delivery — can be managed from home through the app."
      },
      {
        question: "What if my measurements are wrong?",
        answer: "Inaccurate measurements can lead to fitting issues. Most platforms allow you to request changes during the stitching process, but getting measurements right initially saves time."
      },
      {
        question: "How long does home stitching take?",
        answer: "Timelines vary by garment complexity and tailor availability. Tailors typically provide an expected completion date when they accept your order, ranging within 1-7 days for basic garments or within 7-14 days for complex garments."
      }
    ],
    tldr: "Getting clothes stitched from home involves using an online tailoring app to provide measurements, design details, and location. A nearby tailor accepts your order, stitches the garment, and delivers it to your doorstep. Platforms like ApneTailor handle pickup, progress tracking, and communication throughout the process.",
    apneTailorConnection:
      "ApneTailor is designed specifically for home-based custom tailoring. The app guides you through garment selection, measurements, fabric details, and connects you with verified local tailors who handle the rest."
  },
  {
    slug: "how-to-take-measurements-for-blouse-stitching",
    title: "How to Take Measurements for Blouse Stitching?",
    primaryQuestion: "How do I take measurements for blouse stitching?",
    description:
      "A practical guide to taking accurate blouse measurements at home for custom stitching, including key measurement points and tips for a better fit.",
    publishedAt: "2026-07-14",
    updatedAt: "2026-07-14",
    author: "ApneTailor Editorial Team",
    category: "Measurements",
    tags: ["blouse", "measurements", "women tailoring"],
    canonicalPath: "/blog/how-to-take-measurements-for-blouse-stitching/",
    indexable: true,
    relatedServices: ["blouse"],
    content: [
      {
        type: "paragraph",
        text: "To take blouse measurements, measure your bust, waist, shoulder width, armhole, sleeve length, blouse length, and front/back neck depth using a flexible measuring tape while standing straight. Having someone help you improves accuracy."
      },
      {
        type: "heading",
        level: 2,
        text: "Key Measurement Points"
      },
      {
        type: "list",
        items: [
          "Bust: Measure around the fullest part of your chest",
          "Waist: Measure around your natural waistline",
          "Shoulder: Measure from one shoulder edge to the other across the back",
          "Armhole: Measure around the fullest part of your upper arm",
          "Sleeve length: From shoulder edge to desired sleeve end",
          "Blouse length: From shoulder to desired hemline",
          "Front neck depth: From shoulder-neck junction to desired neckline",
          "Back neck depth: Same measurement on the back"
        ]
      },
      {
        type: "heading",
        level: 2,
        text: "Tips for Accurate Measurements"
      },
      {
        type: "list",
        items: [
          "Stand straight with relaxed posture",
          "Keep the measuring tape snug but not tight",
          "Measure over well-fitting undergarments",
          "Ask someone to help for back and shoulder measurements",
          "Use a well-fitting existing blouse as reference if available",
          "Record measurements in inches or centimeters consistently"
        ]
      },
      {
        type: "heading",
        level: 2,
        text: "Using a Sample Blouse"
      },
      {
        type: "paragraph",
        text: "If you have a blouse that fits well, you can provide it as a reference. Some tailoring services also accept sample garments for pickup so the tailor can take measurements directly. This is often the most reliable method for complex or designer blouses."
      }
    ],
    faqs: [
      {
        question: "Can I use my old blouse for measurements?",
        answer: "Yes. A well-fitting blouse is one of the best references. You can measure it directly or provide it to the tailor as a sample."
      },
      {
        question: "What if I measure incorrectly?",
        answer: "Measurement errors are a common cause of fitting issues. Double-check each measurement, and if the platform supports it, request adjustments during the stitching review stage."
      }
    ],
    tldr: "Measure bust, waist, shoulder, armhole, sleeve length, blouse length, and neck depth with a flexible tape. Stand straight, keep the tape snug, and consider using a well-fitting blouse as reference for the most accurate results.",
    apneTailorConnection:
      "ApneTailor's app includes guided measurement screens for blouse stitching with visual references to help you measure accurately at home."
  },
  {
    slug: "what-is-online-tailoring-and-how-does-it-work",
    title: "What Is Online Tailoring and How Does It Work?",
    primaryQuestion: "What is online tailoring?",
    description:
      "Understand what online tailoring means, how it differs from visiting a local tailor, and what to expect from the digital stitching process.",
    publishedAt: "2026-07-14",
    updatedAt: "2026-07-14",
    author: "ApneTailor Editorial Team",
    category: "Online Tailoring",
    tags: ["online tailoring", "tailoring app", "custom stitching"],
    canonicalPath: "/blog/what-is-online-tailoring-and-how-does-it-work/",
    indexable: true,
    relatedServices: [],
    content: [
      {
        type: "paragraph",
        text: "Online tailoring is a service that lets you order custom-stitched clothing through a digital platform — typically a mobile app or website — without visiting a tailor shop in person. The platform connects you with local tailors, manages measurements, coordinates fabric logistics, and tracks the stitching process."
      },
      {
        type: "heading",
        level: 2,
        text: "How Online Tailoring Differs From Traditional Tailoring"
      },
      {
        type: "list",
        items: [
          "Measurements are captured digitally rather than in person",
          "You can compare tailor responses before committing",
          "Pricing is presented upfront before payment",
          "Pickup and delivery are coordinated by the platform",
          "Progress is visible through the app during stitching",
          "Communication happens through in-app chat rather than phone calls"
        ]
      },
      {
        type: "heading",
        level: 2,
        text: "Who Is Online Tailoring For?"
      },
      {
        type: "paragraph",
        text: "Online tailoring suits anyone who wants custom clothing without the hassle of multiple tailor visits. It is especially useful for people with busy schedules, those preparing outfits for weddings or events, and anyone who prefers the convenience of doorstep service."
      }
    ],
    faqs: [
      {
        question: "Is online tailoring as good as visiting a tailor?",
        answer: "The stitching quality depends on the tailor, not the ordering method. Online platforms connect you with skilled local tailors and add convenience layers like tracking, transparent pricing, and doorstep logistics."
      },
      {
        question: "Is online tailoring available everywhere?",
        answer: "Availability depends on the platform and your location. Most services are expanding city by city. Check the app for availability in your area."
      }
    ],
    tldr: "Online tailoring lets you order custom-stitched clothes through a digital platform. You provide measurements and details digitally, a local tailor stitches the garment, and the platform handles pickup, tracking, and delivery.",
    apneTailorConnection:
      "ApneTailor is an online tailoring platform that connects customers with verified local tailors, with full order tracking from pickup to delivery."
  },
  {
    slug: "should-i-provide-my-own-fabric-or-let-the-tailor-source-it",
    title: "Should I Provide My Own Fabric or Let the Tailor Source It?",
    primaryQuestion: "Should I provide my own fabric or let the tailor source it?",
    description:
      "Compare the two fabric options in custom tailoring — bringing your own fabric versus having the tailor provide it — and understand how each affects the process.",
    publishedAt: "2026-07-14",
    updatedAt: "2026-07-14",
    author: "ApneTailor Editorial Team",
    category: "Fabric",
    tags: ["fabric", "tailoring process", "custom stitching"],
    canonicalPath: "/blog/should-i-provide-my-own-fabric-or-let-the-tailor-source-it/",
    indexable: true,
    relatedServices: [],
    content: [
      {
        type: "paragraph",
        text: "If you already have fabric you love, provide it yourself. If you want convenience and trust the tailor's fabric selection, let the tailor source it. Each option changes the logistics and timeline of your order."
      },
      {
        type: "heading",
        level: 2,
        text: "When to Provide Your Own Fabric"
      },
      {
        type: "list",
        items: [
          "You have already purchased fabric from a store or online",
          "You want a specific material, colour, or print",
          "You have fabric left over from a previous purchase",
          "You want full control over fabric quality and cost"
        ]
      },
      {
        type: "paragraph",
        text: "When you provide fabric, the platform arranges pickup from your location and delivers it to the tailor. This adds a pickup step before stitching can begin."
      },
      {
        type: "heading",
        level: 2,
        text: "When to Let the Tailor Provide Fabric"
      },
      {
        type: "list",
        items: [
          "You do not have fabric and want a hassle-free experience",
          "You trust the tailor's fabric knowledge for your garment type",
          "You want to skip the fabric pickup step entirely",
          "You are unsure about what fabric to choose"
        ]
      },
      {
        type: "paragraph",
        text: "When the tailor provides fabric, stitching can begin immediately after payment since the fabric is already with the tailor. You specify the fabric type and the tailor handles sourcing."
      }
    ],
    faqs: [
      {
        question: "Does providing my own fabric save money?",
        answer: "It can, since you control the fabric cost separately. However, the stitching price remains the same. Compare total costs including fabric when deciding."
      },
      {
        question: "What fabric details do I need to share?",
        answer: "Share the fabric name or type, and a photo of the fabric. This helps the tailor prepare appropriately before pickup or stitching begins."
      }
    ],
    tldr: "Provide your own fabric if you have a specific material in mind. Let the tailor source it for convenience and a faster start. Your choice affects whether a fabric pickup step is needed before stitching begins.",
    apneTailorConnection:
      "ApneTailor lets you choose who provides the fabric during the order flow. The app adjusts the process automatically based on your selection."
  },
  {
    slug: "how-to-prepare-for-wedding-garment-stitching",
    title: "How to Prepare for Wedding Garment Stitching?",
    primaryQuestion: "How should I prepare for wedding garment stitching?",
    description:
      "Practical steps to prepare for getting wedding garments custom-stitched, including timelines, measurements, fabric, and design planning.",
    publishedAt: "2026-07-14",
    updatedAt: "2026-07-14",
    author: "ApneTailor Editorial Team",
    category: "Occasion Wear",
    tags: ["wedding", "lehenga", "sherwani", "occasion wear"],
    canonicalPath: "/blog/how-to-prepare-for-wedding-garment-stitching/",
    indexable: true,
    relatedServices: ["lehenga", "sherwani", "blouse"],
    content: [
      {
        type: "paragraph",
        text: "Start preparing for wedding garment stitching at least 4–6 weeks before the event. Gather design references, finalize fabric choices, take accurate measurements early, and allow buffer time for fitting adjustments."
      },
      {
        type: "heading",
        level: 2,
        text: "Timeline Planning"
      },
      {
        type: "list",
        items: [
          "6+ weeks before: Finalize design references and fabric",
          "4–5 weeks before: Place your stitching order with measurements",
          "2–3 weeks before: Review progress images and request any changes",
          "1 week before: Confirm final delivery date",
          "Event day: Allow time for any last-minute pressing or minor adjustments"
        ]
      },
      {
        type: "heading",
        level: 2,
        text: "Design and Fabric Preparation"
      },
      {
        type: "paragraph",
        text: "Collect clear design references — photos of styles you like, details about embroidery, neckline preferences, and colour combinations. If providing your own fabric, ensure you have enough material for the garment type. For lehengas and sherwanis, discuss lining, padding, and embellishment requirements with your tailor through the app."
      },
      {
        type: "heading",
        level: 2,
        text: "Measurement Tips for Wedding Wear"
      },
      {
        type: "paragraph",
        text: "Wedding garments often have specific fit requirements — fitted blouses, structured lehengas, or tailored sherwanis. Take measurements while wearing the undergarments you plan to use on the event day. For blouses paired with sarees, consider the saree draping style when noting blouse length and back design."
      }
    ],
    faqs: [
      {
        question: "How early should I order wedding wear stitching?",
        answer: "At least 4–6 weeks before the event. Complex garments like bridal lehengas or embroidered sherwanis may need more time."
      },
      {
        question: "Can I get urgent wedding stitching?",
        answer: "Some tailors may accept rush orders depending on their workload, but quality and attention to detail are better with adequate time. Plan early when possible."
      }
    ],
    tldr: "Start 4–6 weeks early. Finalize design references and fabric, take accurate measurements, place your order, review progress, and allow buffer time for changes before the event.",
    apneTailorConnection:
      "ApneTailor supports wedding garment categories including lehengas, blouses, and sherwanis. The app lets you share detailed design references and track progress throughout the stitching process."
  },
  {
    slug: "how-does-doorstep-pickup-and-delivery-work-for-tailoring",
    title: "How Does Doorstep Pickup and Delivery Work for Tailoring?",
    primaryQuestion: "How does doorstep pickup and delivery work for tailoring?",
    description:
      "Understand how fabric pickup and finished garment delivery work in online tailoring, and what to expect at each stage.",
    publishedAt: "2026-07-14",
    updatedAt: "2026-07-14",
    author: "ApneTailor Editorial Team",
    category: "Logistics",
    tags: ["pickup", "delivery", "doorstep tailoring"],
    canonicalPath: "/blog/how-does-doorstep-pickup-and-delivery-work-for-tailoring/",
    indexable: true,
    relatedServices: [],
    content: [
      {
        type: "paragraph",
        text: "In doorstep tailoring, a courier picks up your fabric from your address and delivers it to the tailor. After stitching is complete, another pickup collects the finished garment from the tailor and delivers it to you. You can track both journeys in the app."
      },
      {
        type: "heading",
        level: 2,
        text: "The Two Logistics Timelines"
      },
      {
        type: "paragraph",
        text: "If you provide the fabric, there are two separate logistics timelines. The first picks up fabric from you and delivers it to the tailor. The second picks up the finished garment from the tailor and delivers it to you. If the tailor provides the fabric, only the second timeline applies — direct delivery of the finished garment."
      },
      {
        type: "heading",
        level: 2,
        text: "What to Expect During Pickup"
      },
      {
        type: "list",
        items: [
          "Be available at the scheduled pickup address",
          "Keep fabric properly packed and ready for handover",
          "For finished garment delivery, be available to receive and inspect the item",
          "Track the courier's location through the app where supported"
        ]
      },
      {
        type: "heading",
        level: 2,
        text: "Delivery Scheduling"
      },
      {
        type: "paragraph",
        text: "After stitching is approved, you can often choose between immediate delivery or scheduling a specific date. This flexibility helps you receive the garment when it is most convenient."
      }
    ],
    faqs: [
      {
        question: "Is pickup and delivery free?",
        answer: "Logistics costs are typically included in the order pricing. Check the pricing details presented by the tailor before confirming your order."
      },
      {
        question: "What if I am not available during pickup?",
        answer: "Availability during scheduled pickup and delivery times is important. If you are unavailable, it may affect the timeline. Check the platform's policy for rescheduling options."
      }
    ],
    tldr: "Doorstep tailoring uses courier pickup and delivery for fabric and finished garments. You track both journeys in the app. If the tailor provides fabric, only the final delivery pickup is needed.",
    apneTailorConnection:
      "ApneTailor coordinates pickup and delivery through integrated logistics partners. You can track each stage of the journey directly in the app."
  }
];

export function getAllArticles(): Article[] {
  return articles.map((a) => articleSchema.parse(a));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getArticleSlugs(): string[] {
  return getAllArticles().map((a) => a.slug);
}
