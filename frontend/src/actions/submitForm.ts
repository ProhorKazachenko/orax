'use server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function submitForm(formData: FormData) {
  console.log({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
  try {
    const name = formData.get('name')
    const contact = formData.get('contact')
    const message = formData.get('message')

    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TGT,
      subject: 'Form feedback',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone or Email:</strong> ${contact}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    console.log('Message sent:', info.messageId)
    return { success: true }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false, error: 'Не удалось отправить сообщение. Попробуйте позже.' }
  }
}
