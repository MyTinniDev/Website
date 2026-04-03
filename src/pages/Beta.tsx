import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function BetaSignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [establishment, setEstablishment] = useState('');
  const [notes, setNotes] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = async () => {
    // Validate
    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      setFormState('error');
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      setFormState('error');
      return;
    }

    setFormState('submitting');
    setErrorMsg('');

    const { error } = await supabase
      .from('interest_submissions')
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        role: establishment.trim() || null,
        message: notes.trim() || null,
      });

    if (error) {
      console.error(error);
      setErrorMsg('Something went wrong. Please try again.');
      setFormState('error');
      return;
    }

    setFormState('success');
  };

  if (formState === 'success') {
    return (
      <div style={styles.successBox}>
        <p style={styles.successIcon}>🍸</p>
        <h3 style={styles.successTitle}>You're on the list.</h3>
        <p style={styles.successText}>
          Sit tight — you'll receive a download link within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Join the Beta</h2>
      <p style={styles.subheading}>
        We're inviting a select group of industry professionals to test MyTinni before public launch.
      </p>

      <div style={styles.field}>
        <label style={styles.label}>Name <span style={styles.required}>*</span></label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your full name"
          style={styles.input}
          disabled={formState === 'submitting'}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Email <span style={styles.required}>*</span></label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          style={styles.input}
          disabled={formState === 'submitting'}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>
          Establishment / Role{' '}
          <span style={styles.optional}>(optional)</span>
        </label>
        <input
          type="text"
          value={establishment}
          onChange={e => setEstablishment(e.target.value)}
          placeholder="Bar name, hotel, freelance..."
          style={styles.input}
          disabled={formState === 'submitting'}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>
          Notes{' '}
          <span style={styles.optional}>(optional)</span>
        </label>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Tell us what you hope to see..."
          style={{ ...styles.input, ...styles.textarea }}
          disabled={formState === 'submitting'}
        />
      </div>

      {formState === 'error' && (
        <p style={styles.errorText}>{errorMsg}</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={formState === 'submitting'}
        style={{
          ...styles.button,
          opacity: formState === 'submitting' ? 0.6 : 1,
          cursor: formState === 'submitting' ? 'not-allowed' : 'pointer',
        }}
      >
        {formState === 'submitting' ? 'Sending...' : 'Request Access'}
      </button>

      <p style={styles.consent}>
        By submitting, you agree to us storing your details to contact you about the MyTinni beta.
      </p>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    maxWidth: '480px',
    margin: '0 auto',
    padding: '48px 24px',
    fontFamily: "'Mate', Georgia, serif",
  },
  heading: {
    fontFamily: "'Mate SC', Georgia, serif",
    color: 'rgb(139, 26, 26)',
    fontSize: '28px',
    marginBottom: '8px',
    fontWeight: 400,
  },
  subheading: {
    color: 'rgb(100, 60, 40)',
    fontSize: '15px',
    lineHeight: '1.6',
    marginBottom: '36px',
  },
  field: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontFamily: "'Mate SC', Georgia, serif",
    fontSize: '13px',
    color: 'rgb(139, 26, 26)',
    letterSpacing: '0.03em',
  },
  required: {
    color: 'rgb(139, 26, 26)',
  },
  optional: {
    color: 'rgb(160, 120, 90)',
    fontSize: '12px',
    fontFamily: "'Mate', Georgia, serif",
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid rgb(139, 26, 26)',
    borderRadius: '4px',
    backgroundColor: 'rgb(232, 213, 181)',
    color: 'rgb(60, 30, 20)',
    fontFamily: "'Mate', Georgia, serif",
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  textarea: {
    minHeight: '90px',
    resize: 'vertical',
  },
  button: {
    width: '100%',
    padding: '13px',
    backgroundColor: 'rgb(139, 26, 26)',
    color: 'rgb(232, 213, 181)',
    border: 'none',
    borderRadius: '4px',
    fontFamily: "'Mate SC', Georgia, serif",
    fontSize: '15px',
    letterSpacing: '0.05em',
    marginTop: '8px',
    transition: 'opacity 0.2s',
  },
  errorText: {
    color: 'rgb(180, 40, 40)',
    fontSize: '13px',
    marginBottom: '8px',
    fontFamily: "'Mate', Georgia, serif",
  },
  consent: {
    fontSize: '11px',
    color: 'rgb(140, 100, 70)',
    textAlign: 'center',
    marginTop: '12px',
    lineHeight: '1.5',
    fontFamily: "'Mate', Georgia, serif",
  },
  successBox: {
    maxWidth: '480px',
    margin: '0 auto',
    padding: '48px 24px',
    textAlign: 'center',
  },
  successIcon: {
    fontSize: '36px',
    marginBottom: '8px',
  },
  successTitle: {
    fontFamily: "'Mate SC', Georgia, serif",
    color: 'rgb(139, 26, 26)',
    fontSize: '22px',
    fontWeight: 400,
    marginBottom: '12px',
  },
  successText: {
    color: 'rgb(100, 60, 40)',
    fontSize: '15px',
    lineHeight: '1.6',
    fontFamily: "'Mate', Georgia, serif",
  },
};
