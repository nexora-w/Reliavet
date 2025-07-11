# Reliavet - Modern Veterinary Telemedicine Platform

![Reliavet Logo](public/assets/logos/main_logo.png)

Reliavet is a comprehensive veterinary telemedicine platform that connects pet owners with veterinarians and veterinary technicians. Built with Next.js and modern web technologies, it provides a seamless experience for virtual pet care consultations.

## 🌟 Features

- **For Pet Owners**
  - Find and connect with veterinarians
  - Schedule virtual consultations
  - Locate nearby veterinary hospitals
  - Access educational resources and blog articles
  - Secure video consultations

- **For Veterinarians**
  - Telemedicine consultation platform
  - Patient management system
  - Schedule management
  - Professional profile management

- **For Veterinary Technicians**
  - Specialized platform access
  - Support tools for patient care
  - Collaboration with veterinarians

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Maps Integration**: [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)
- **UI Components**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Carousel/Slider**: [Swiper](https://swiperjs.com/)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nexora-w/Reliavet
   cd Reliavet
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add necessary environment variables:
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

## 🏃‍♂️ Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Build

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (home)/            # Home page and components
│   ├── about-us/          # About page
│   ├── blog/              # Blog section
│   ├── find-hospital/     # Hospital finder
│   ├── find-vet/         # Veterinarian finder
│   ├── hospital/         # Hospital portal
│   ├── pet-owner/        # Pet owner portal
│   ├── technician/       # Technician portal
│   └── veterinarian/     # Veterinarian portal
├── components/            # Reusable components
├── styles/               # Global styles
└── utils/                # Utility functions
```

## 🎨 Design Assets

The project includes a comprehensive set of design assets:
- Icons for UI elements
- Avatar images for profiles
- Brand logos and images
- Custom illustrations

All assets are organized in the `public/assets/` directory.

## 🔒 Security

- Secure authentication system
- Protected routes for different user types
- Data encryption for sensitive information
- HIPAA-compliant video consultations

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📄 License

[Add your license information here]

## 👥 Support

For support, please contact [Add contact information]
