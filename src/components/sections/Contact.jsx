import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Section from '../layout/Section';
import { profile } from '../../data/profile';
import './Contact.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Have a project, an opportunity, or just want to talk open source? My inbox is open."
    >
      <div className="contact-grid">
        <motion.div
          className="contact-form window"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="window-bar">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="window-title">contact.sh</div>
          </div>
          <form className="contact-body" onSubmit={onSubmit}>
            <label className="contact-field mono">
              <span className="tok-comment"># your name</span>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={onChange}
                placeholder="Ada Lovelace"
                autoComplete="name"
              />
            </label>
            <label className="contact-field mono">
              <span className="tok-comment"># your email</span>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={onChange}
                placeholder="ada@example.com"
                autoComplete="email"
              />
            </label>
            <label className="contact-field mono">
              <span className="tok-comment"># message</span>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={onChange}
                placeholder="Let's build something together…"
              />
            </label>

            <button
              className="btn btn-primary contact-submit"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'sending…' : 'send --message'}
            </button>

            <div className="contact-status mono" role="status">
              {status === 'sending' && (
                <span className="tok-comment">$ sending message…</span>
              )}
              {status === 'sent' && (
                <span className="tok-fn">✓ message sent (exit code 0)</span>
              )}
              {status === 'error' && (
                <span className="contact-error">
                  ✗ send failed. Email me directly at {profile.email}
                </span>
              )}
            </div>
          </form>
        </motion.div>

        <motion.aside
          className="contact-aside"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
        >
          <p className="contact-blurb">
            Open to interesting problems, open source collaboration, and good
            conversation. The fastest way to reach me:
          </p>
          <ul className="contact-list mono">
            <li>
              <span className="tok-key">email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span className="tok-key">phone</span>
              <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
                {profile.phone}
              </a>
            </li>
            <li>
              <span className="tok-key">github</span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                @{profile.githubUsername}
              </a>
            </li>
            <li>
              <span className="tok-key">linkedin</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                /in/pavansshekar
              </a>
            </li>
            <li>
              <span className="tok-key">location</span>
              <span>{profile.location}</span>
            </li>
          </ul>
        </motion.aside>
      </div>
    </Section>
  );
}
