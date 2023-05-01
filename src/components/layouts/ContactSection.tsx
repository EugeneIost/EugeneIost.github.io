import Section from "../UI/Section";

const ContactSection = () => {
  return (
    <Section id="contact">
      <div className="py-[100px] mx-auto max-w-[600px] flex flex-col items-center">
        <h1 className="ml-1 mb-[20px] text-green font-['SF_Mono'] font-normal text-md">
          <span className="mr-[10px]">04.</span>
          Обратная связь
        </h1>
        <h2 className="text-[50px] text-lightest-slate leading-[1.1] font-semibold mb-[10px] text-center">
          Давайте свяжемся!
        </h2>
        <p className="text-center">
          Я буду рад, если вы захотите со мной связаться после просмотра
          портфолио. Если у вас есть какие-либо предложения, напишите мне!
        </p>
        <a
          href="mailto:eugiost.dev@gmail.com"
          className="text-green bg-[transparent] border-[1px] border-green rounded text-sm font-['SF_Mono'] py-[1.25rem] px-[1.75rem] leading-[1] mt-[50px] transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-green"
        >
          Связаться
        </a>
      </div>
    </Section>
  );
};

export default ContactSection;
