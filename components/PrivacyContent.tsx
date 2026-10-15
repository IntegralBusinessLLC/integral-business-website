"use client";

import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./context/LanguageContext";

const content = {
  en: {
    title: "Privacy Policy",
    updated: "Updated October 15, 2026",
    intro: "This notice explains the information submitted through the Integral Business LLC website for towing, roadside assistance and vehicle purchase inquiries in Orlando and Central Florida.",
    sections: [
      ["Information you submit", "The assistance form asks for your name, phone number, optional email address and a description of your request. The vehicle offer form also asks for vehicle details, pickup location, requested price, condition and confirmation of title and vehicle completeness. Please keep payment details, identification numbers and other sensitive personal information out of the free-text fields."],
      ["How your request is handled", "The information in these forms is sent to Integral Business LLC so the business can respond, discuss a service or vehicle offer and coordinate the requested assistance. Submitting a form requests contact about that inquiry."],
      ["Services used by this website", "Form delivery uses EmailJS and the business's configured email service. The website is hosted using Vercel, and the domain also uses Cloudflare. These providers may process request and connection information to deliver and protect their services. Their own privacy notices describe their processing."],
      ["Language preference", "The website uses browser local storage to remember the language you select. You can remove this preference by clearing this website's stored data in your browser."],
      ["WhatsApp and Facebook", "If you choose a WhatsApp or Facebook link, you use that provider's service. Messages, photos or other information you send there are subject to that provider's terms and privacy practices."],
      ["Questions about your information", "To ask about information you submitted, or to request a correction or deletion, contact Integral Business LLC at (407) 360-6109. Tell us which request your question concerns so the business can locate it and discuss your request."],
    ],
  },
  es: {
    title: "Política de privacidad",
    updated: "Actualizada el 15 de octubre de 2026",
    intro: "Este aviso explica qué información se envía mediante la web de Integral Business LLC para consultas sobre grúas, asistencia en carretera y compra de vehículos en Orlando y Florida Central.",
    sections: [
      ["Información que envías", "El formulario de asistencia solicita tu nombre, teléfono, correo electrónico opcional y una descripción de tu solicitud. El formulario de oferta por un vehículo también solicita sus datos, ubicación de recogida, precio solicitado, condición y confirmación del título y de sus piezas principales. Evita incluir datos de pago, números de identificación u otra información personal sensible en los campos de texto libre."],
      ["Cómo se atiende tu solicitud", "La información de estos formularios se envía a Integral Business LLC para responderte, conversar sobre el servicio o la oferta por el vehículo y coordinar la asistencia solicitada. Al enviar un formulario, solicitas que te contactemos sobre esa consulta."],
      ["Servicios que utiliza esta web", "El envío de formularios utiliza EmailJS y el servicio de correo configurado por el negocio. La web está alojada en Vercel y el dominio también utiliza Cloudflare. Estos proveedores pueden tratar información de solicitudes y conexiones para prestar y proteger sus servicios. Sus propios avisos de privacidad describen ese tratamiento."],
      ["Preferencia de idioma", "La web utiliza el almacenamiento local del navegador para recordar el idioma que seleccionas. Puedes eliminar esa preferencia borrando los datos guardados de esta web en tu navegador."],
      ["WhatsApp y Facebook", "Si eliges un enlace de WhatsApp o Facebook, utilizarás el servicio de ese proveedor. Los mensajes, fotos u otros datos que envíes allí están sujetos a sus condiciones y prácticas de privacidad."],
      ["Consultas sobre tus datos", "Para consultar sobre la información que enviaste o solicitar su corrección o eliminación, contacta a Integral Business LLC al (407) 360-6109. Indica a qué consulta te refieres para que el negocio pueda localizarla y atender tu solicitud."],
    ],
  },
  pt: {
    title: "Política de privacidade",
    updated: "Atualizada em 15 de outubro de 2026",
    intro: "Este aviso explica as informações enviadas pelo site da Integral Business LLC para consultas sobre guincho, assistência na estrada e compra de veículos em Orlando e na Flórida Central.",
    sections: [
      ["Informações que você envia", "O formulário de assistência solicita nome, telefone, e-mail opcional e uma descrição da solicitação. O formulário de oferta por um veículo também solicita dados do veículo, local de retirada, preço solicitado, condição e confirmação do título e das peças principais. Evite incluir dados de pagamento, números de identificação ou outras informações pessoais sensíveis nos campos de texto livre."],
      ["Como sua solicitação é atendida", "As informações desses formulários são enviadas à Integral Business LLC para responder, conversar sobre o serviço ou a oferta pelo veículo e coordenar a assistência solicitada. Ao enviar um formulário, você solicita contato sobre essa consulta."],
      ["Serviços utilizados por este site", "O envio dos formulários utiliza o EmailJS e o serviço de e-mail configurado pela empresa. O site é hospedado na Vercel e o domínio também utiliza a Cloudflare. Esses provedores podem processar informações de solicitações e conexões para prestar e proteger seus serviços. Seus próprios avisos de privacidade descrevem esse processamento."],
      ["Preferência de idioma", "O site utiliza o armazenamento local do navegador para lembrar o idioma selecionado. Você pode remover essa preferência apagando os dados armazenados deste site no navegador."],
      ["WhatsApp e Facebook", "Ao escolher um link do WhatsApp ou Facebook, você utilizará o serviço desse provedor. Mensagens, fotos ou outras informações enviadas por esses serviços estão sujeitas aos termos e às práticas de privacidade do provedor."],
      ["Dúvidas sobre seus dados", "Para perguntar sobre informações enviadas ou solicitar correção ou exclusão, entre em contato com a Integral Business LLC pelo telefone (407) 360-6109. Informe a qual consulta você se refere para que a empresa possa localizá-la e atender à solicitação."],
    ],
  },
};

export default function PrivacyContent() {
  const { language, t } = useLanguage();
  const copy = content[language];

  return (
    <main className="min-h-screen bg-[#080808] px-6 py-12 text-slate-300 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <nav aria-label={t.home} className="mb-14 flex flex-wrap items-center justify-between gap-6">
          <Link href="/" className="font-bold text-yellow-400">← {t.home}</Link>
          <LanguageSwitcher />
        </nav>
        <p className="text-sm font-bold uppercase tracking-widest text-yellow-400">Integral Business LLC</p>
        <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">{copy.title}</h1>
        <p className="mt-4 text-sm text-slate-400">{copy.updated}</p>
        <p className="mt-8 leading-8">{copy.intro}</p>
        {copy.sections.map(([title, text]) => (
          <section key={title} className="mt-10">
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="mt-3 leading-8">{text}</p>
          </section>
        ))}
        <div className="mt-10 flex flex-wrap gap-5 border-t border-white/10 pt-8 text-yellow-300">
          <a href="tel:+14073606109" className="underline underline-offset-4">(407) 360-6109</a>
          <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">EmailJS</a>
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Vercel</a>
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Cloudflare</a>
        </div>
      </div>
    </main>
  );
}
