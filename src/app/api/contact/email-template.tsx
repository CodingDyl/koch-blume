import * as React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
  preferredContact: string;
  practiceArea: string;
}

// Practice area mapping for better display
const practiceAreaLabels: { [key: string]: string } = {
  'corporate': 'Corporate Law',
  'family': 'Family Law',
  'real-estate': 'Real Estate Law',
  'criminal': 'Criminal Defense',
  'litigation': 'Business Litigation',
  'estate': 'Estate Planning',
  'other': 'Other Legal Matter'
};

export const ContactEmailTemplate = ({
  name,
  email,
  phone,
  subject,
  message,
  preferredContact,
  practiceArea
}: ContactEmailTemplateProps): React.ReactElement => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <div style={{ backgroundColor: '#1a385c', padding: '30px', textAlign: 'center' }}>
      <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px', fontWeight: '600' }}>
        New Contact Form Submission
      </h1>
    </div>
    
    <div style={{ backgroundColor: '#ffffff', padding: '40px', borderLeft: '1px solid #e9ecef', borderRight: '1px solid #e9ecef' }}>
      <p style={{ fontSize: '16px', color: '#333', marginBottom: '30px' }}>
        You have received a new contact form submission from your website.
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e9ecef' }}>
              <strong style={{ color: '#1a385c', fontSize: '14px' }}>Name:</strong>
            </td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e9ecef', textAlign: 'right' }}>
              <span style={{ color: '#333', fontSize: '14px' }}>{name}</span>
            </td>
          </tr>
          
          <tr>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e9ecef' }}>
              <strong style={{ color: '#1a385c', fontSize: '14px' }}>Email:</strong>
            </td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e9ecef', textAlign: 'right' }}>
              <a href={`mailto:${email}`} style={{ color: '#548caf', fontSize: '14px', textDecoration: 'none' }}>
                {email}
              </a>
            </td>
          </tr>
          
          <tr>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e9ecef' }}>
              <strong style={{ color: '#1a385c', fontSize: '14px' }}>Phone:</strong>
            </td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e9ecef', textAlign: 'right' }}>
              <a href={`tel:${phone}`} style={{ color: '#548caf', fontSize: '14px', textDecoration: 'none' }}>
                {phone}
              </a>
            </td>
          </tr>
          
          <tr>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e9ecef' }}>
              <strong style={{ color: '#1a385c', fontSize: '14px' }}>Practice Area:</strong>
            </td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e9ecef', textAlign: 'right' }}>
              <span style={{ color: '#333', fontSize: '14px' }}>
                {practiceAreaLabels[practiceArea] || practiceArea}
              </span>
            </td>
          </tr>
          
          <tr>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e9ecef' }}>
              <strong style={{ color: '#1a385c', fontSize: '14px' }}>Preferred Contact:</strong>
            </td>
            <td style={{ padding: '12px 0', borderBottom: '1px solid #e9ecef', textAlign: 'right' }}>
              <span style={{ color: '#333', fontSize: '14px', textTransform: 'capitalize' }}>
                {preferredContact}
              </span>
            </td>
          </tr>
          
          {subject && (
            <tr>
              <td style={{ padding: '12px 0', borderBottom: '1px solid #e9ecef' }}>
                <strong style={{ color: '#1a385c', fontSize: '14px' }}>Subject:</strong>
              </td>
              <td style={{ padding: '12px 0', borderBottom: '1px solid #e9ecef', textAlign: 'right' }}>
                <span style={{ color: '#333', fontSize: '14px' }}>{subject}</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ marginTop: '30px' }}>
        <strong style={{ color: '#1a385c', fontSize: '14px', display: 'block', marginBottom: '10px' }}>
          Message:
        </strong>
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <p style={{ color: '#333', fontSize: '14px', lineHeight: '1.6', margin: 0, whiteSpace: 'pre-wrap' }}>
            {message}
          </p>
        </div>
      </div>
    </div>

    <div style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center', borderLeft: '1px solid #e9ecef', borderRight: '1px solid #e9ecef', borderBottom: '1px solid #e9ecef' }}>
      <p style={{ color: '#666', fontSize: '12px', margin: 0 }}>
        This email was sent from the Kochukov & Blume contact form
      </p>
      <p style={{ color: '#666', fontSize: '12px', margin: '5px 0 0 0' }}>
        {new Date().toLocaleString('en-ZA', { 
          dateStyle: 'full', 
          timeStyle: 'short',
          timeZone: 'Africa/Johannesburg' 
        })}
      </p>
    </div>
  </div>
);
