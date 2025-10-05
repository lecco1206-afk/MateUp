# Design Guidelines for MateUp - University Team-Building Platform

## Design Approach: Reference-Based + Korean Gen Z Aesthetic

**Primary References**: Discord (community feel) + Notion (clean productivity) + Linear (modern minimalism) + Korean student platforms like Everytime

**Key Principle**: Create a vibrant, approachable platform that feels both professional and friendly to Korean university students. Balance youthful energy with trustworthiness.

---

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 255 75% 55% (Vibrant coral-pink - energetic, friendly, Gen Z appeal)
- Secondary: 230 50% 50% (Deep blue - trust, professionalism)
- Accent: 160 60% 50% (Mint green for success states)
- Background: 0 0% 98% (Soft white)
- Surface: 0 0% 100% (Pure white for cards)
- Text Primary: 220 15% 20%
- Text Secondary: 220 10% 50%

**Dark Mode:**
- Primary: 255 70% 60% (Slightly lighter coral)
- Secondary: 230 45% 55%
- Accent: 160 55% 55%
- Background: 220 15% 10%
- Surface: 220 15% 15%
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 70%

### B. Typography

**Font Families** (via Google Fonts CDN):
- Primary: 'Pretendard Variable' or 'Inter' (Korean-optimized sans-serif for UI)
- Headings: 'Montserrat' (bold, modern, international feel)

**Scale**:
- Display (Hero): text-5xl to text-7xl, font-bold
- H1: text-4xl, font-bold
- H2: text-3xl, font-semibold
- H3: text-2xl, font-semibold
- Body: text-base
- Small: text-sm

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 8, 12, 16, 20, and 24
- Micro spacing: p-2, gap-2
- Standard spacing: p-4, gap-4, m-8
- Section spacing: py-16, py-20, py-24
- Container spacing: px-4 on mobile, px-8 on desktop

**Grid System**:
- Max container width: max-w-7xl
- Form containers: max-w-2xl
- Text content: max-w-3xl

### D. Component Library

**Navigation**:
- Sticky header with logo left, nav links center, CTA button right
- Mobile: Hamburger menu with smooth slide-in drawer
- Height: h-16 on mobile, h-20 on desktop
- Backdrop blur on scroll: backdrop-blur-md bg-white/80

**Hero Section**:
- Split layout: 60% content (left), 40% illustration/image (right) on desktop
- Height: min-h-[600px] to min-h-[700px], not forced 100vh
- Include: Bold headline, subheadline, dual CTAs (primary + secondary), trust indicator ("1,000+ 팀 매칭 성공")
- Background: Subtle gradient or pattern overlay

**Form Components**:
- Input fields: Rounded borders (rounded-lg), focus ring with primary color, label above input
- Select dropdowns: Custom styled with chevron icons
- Spacing: space-y-6 for form groups
- Validation: Inline error messages below fields in red
- Submit button: Full width on mobile, auto width on desktop
- Field groups: Use 2-column grid on desktop for compact fields (name/email)

**Cards**:
- Elevation: shadow-md on hover, shadow-lg on focus
- Border: border border-gray-200 in light mode
- Padding: p-6 to p-8
- Rounded: rounded-xl
- Hover: translate-y-[-4px] transition

**Tables (Admin Dashboard)**:
- Sticky header row with background
- Alternating row colors (subtle): even:bg-gray-50
- Compact padding: px-4 py-3
- Responsive: Scroll horizontally on mobile or stack vertically
- Actions column: Icon buttons (edit/delete) with tooltips

**Buttons**:
- Primary: Solid with primary color, white text, rounded-lg, px-6 py-3
- Secondary: Outline with primary border, primary text
- Ghost: No border, hover background
- Sizes: Default (py-3 px-6), Small (py-2 px-4), Large (py-4 px-8)

**Icons**:
- Library: Heroicons via CDN
- Usage: Pair with text in feature cards, use in navigation, form field prefixes
- Size: w-5 h-5 for inline, w-8 h-8 for feature cards, w-12 h-12 for large icons

### E. Landing Page Structure

**Section Breakdown** (7-8 sections):

1. **Hero Section** (80vh on desktop, auto on mobile):
   - Bold headline: "완벽한 팀메이트를 찾아보세요" + emoji (🚀 or 🎯)
   - Subheadline: Value proposition in conversational Korean
   - Dual CTAs: "팀원 찾기" (primary), "더 알아보기" (secondary outline)
   - Trust badge: "2024년 1,000개 이상 팀 매칭 성공"
   - Hero image: Illustration of diverse students collaborating (right side)

2. **Why MateUp Section** (py-20):
   - 3-column grid on desktop (grid-cols-1 md:grid-cols-3)
   - Each card: Icon at top, bold title, short description
   - Reasons: "신뢰할 수 있는 팀원", "투명한 평가 시스템", "빠른 매칭"
   - Playful icons with accent color

3. **How It Works** (py-20, bg-gray-50):
   - 4-step visual timeline or numbered cards
   - Steps: "프로필 작성" → "팀원 모집" → "프로젝트 협업" → "서로 평가"
   - Use connecting lines or arrows between steps

4. **Features Showcase** (py-20):
   - 2-column alternating layout (image left/right, text right/left)
   - 3-4 key features: Anonymous evaluation, Field-specific matching, Safe communication, Performance tracking
   - Each with small screenshot or illustration

5. **Team Recruitment Form Section** (py-24):
   - Centered heading: "지금 팀원을 모집해보세요"
   - Form in centered card (max-w-2xl)
   - Organized field groups with clear labels in Korean
   - Dynamic "모집분야" with add button to create custom fields
   - Visual completion indicator or progress bar

6. **Social Proof / Stats** (py-16, bg-gradient):
   - 4-column stat grid: Teams matched, Active users, Success rate, Average rating
   - Large numbers with animated count-up (optional)
   - Icons above each stat

7. **Advertiser Section** (py-20):
   - Split layout: Left text explaining partnership opportunity, Right simplified ad form
   - Heading: "대학생 공모전 참가자에게 직접 홍보하세요"
   - Benefits list with checkmarks
   - Compact form with essential fields

8. **Footer** (py-12):
   - 3-column layout: Brand/About, Quick Links, Contact Info
   - Social media icons
   - Copyright notice
   - Email: contact@mateup.com (example)

### F. Admin Dashboard Design

**Layout**:
- Sidebar navigation (fixed left, w-64): Logo top, menu items, logout bottom
- Main content area: Header with breadcrumb, content cards
- Top bar: Search, notifications, profile dropdown

**Data Tables**:
- Tabs for switching between "팀 모집 신청" and "광고주 신청"
- Export button (CSV/Excel icon)
- Search/filter bar above table
- Pagination at bottom
- Row actions on hover

**Color Treatment**:
- Sidebar: Dark background (bg-gray-900) with white text
- Main area: Light background (bg-gray-50)
- Status badges: Color-coded (green for active, gray for pending)

---

## Images

**Hero Section**:
- Large illustration/image showing diverse Korean university students collaborating
- Style: Modern, flat illustration or authentic photography
- Placement: Right 40% of hero section on desktop, below text on mobile
- Alternative: Abstract geometric pattern with brand colors

**Features Showcase**:
- 3-4 supporting images/screenshots showing:
  1. Team recruitment form interface
  2. Anonymous evaluation interface
  3. Project collaboration dashboard
  4. Success story visualization

**Why MateUp Section**:
- Icon illustrations (can use icon library)
- No large images needed

---

## Accessibility & Responsiveness

- All forms have proper labels and ARIA attributes
- Focus states clearly visible with ring-2 ring-primary
- Dark mode toggle in header
- Mobile breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch targets minimum 44x44px on mobile
- Korean language support with proper line-height for readability (leading-relaxed)