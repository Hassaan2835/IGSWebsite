import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact IGS Health Care — Get in Touch',
  description:
    'Contact IGS Health Care for product inquiries, distributor partnerships, or feedback. Reach us by email at inquiries@igshealthcare.com or call us during business hours.',
  alternates: { canonical: 'https://www.igshealthcare.com/contact' },
  openGraph: {
    title: 'Contact IGS Health Care — Get in Touch',
    description:
      'Reach out to IGS Health Care for product inquiries, distributor partnerships, or general feedback.',
    url: 'https://www.igshealthcare.com/contact',
    type: 'website',
  },
};

// ── JSON-LD: LocalBusiness / ContactPage ──────────────────────────────────
const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact IGS Health Care',
  url: 'https://www.igshealthcare.com/contact',
  description:
    'Contact page for IGS Health Care. Get in touch for product inquiries, distributor partnerships, or any other questions.',
  mainEntity: {
    '@type': 'Organization',
    name: 'IGS Health Care',
    url: 'https://www.igshealthcare.com',
    email: 'inquiries@igshealthcare.com',
    telephone: '+92-XXX-XXXXXXX',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'inquiries@igshealthcare.com',
        availableLanguage: ['English', 'Urdu'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'inquiries@igshealthcare.com',
        availableLanguage: ['English', 'Urdu'],
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-primary/10 text-center" aria-label="Contact Hero">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get In Touch</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;d love to hear from you. Send us a message for product inquiries, distributor partnerships, or any feedback.
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="py-16 md:py-24" aria-label="Contact Information and Form">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Contact Information</h2>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 text-accent p-3 rounded-full" aria-hidden="true">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-muted-foreground">Send us an email for product inquiries or distributor partnerships.</p>
                  <a
                    href="mailto:inquiries@igshealthcare.com"
                    className="text-primary hover:underline"
                    aria-label="Email IGS Health Care at inquiries@igshealthcare.com"
                  >
                    inquiries@igshealthcare.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 text-accent p-3 rounded-full" aria-hidden="true">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-muted-foreground">Give us a call during business hours (Mon–Fri, 9am–6pm PKT).</p>
                  <a
                    href="tel:+921234567890"
                    className="text-primary hover:underline"
                    aria-label="Call IGS Health Care"
                  >
                    +92 123 456 7890
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 text-accent p-3 rounded-full" aria-hidden="true">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Office</h3>
                  <address className="not-italic text-muted-foreground">
                    IGS Health Care,<br />
                    Pakistan
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
