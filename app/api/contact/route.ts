import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, subject, message } = data;
    
    const { data: emailData, error } = await resend.emails.send({
      from: 'Domus Contato <onboarding@resend.dev>',
      to: 'sddomus@gmail.com',
      subject: `Novo Lead: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #080028;">Novo Lead Recebido! 🚀</h2>
          <p style="color: #555; font-size: 16px;">Você recebeu uma nova mensagem através do site da Domus Soluções Digitais.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>E-mail:</strong> ${email}</p>
            <p style="margin: 0 0 10px 0;"><strong>Telefone:</strong> ${phone}</p>
            <p style="margin: 0 0 10px 0;"><strong>Serviço/Assunto:</strong> ${subject}</p>
          </div>
          
          <h3 style="color: #080028; margin-bottom: 10px;">Mensagem:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; white-space: pre-wrap; color: #333; line-height: 1.5;">
            ${message}
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
            Este e-mail foi enviado automaticamente pelo formulário de contato do site.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Erro do Resend:', error);
      return NextResponse.json(
        { success: false, message: 'Erro ao enviar mensagem pelo Resend.' }, 
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Mensagem enviada com sucesso!' 
    }, { status: 200 });

  } catch (error) {
    console.error('Erro ao processar formulário de contato:', error);
    return NextResponse.json(
      { success: false, message: 'Erro interno ao processar a requisição.' }, 
      { status: 500 }
    );
  }
}
