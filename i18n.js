import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          welcome: {
            title: "We partner with forward-thinking enterprises and starups",
            title2: "We are excited to drive your digital transformation",
          },
          header: {
            h1: "Success stories",
            h2: "Markets",
            h3: "Countries",
            h4: "We are VASS",
            h5: "How we do it",
            h6: "Insights",
            h7: "News",
            h8: "VASS Research",
            h9: "Know more",
          },
          card: {
            title1: "Brand",
            title2: "Product",
            title3: "Motion",
            title4: "WHAT WE DO - WHAT WE DO - WHAT WE DO - WHAT WE DO -",
          },
          association: {
            text1:
              "Sociable design for  a global forest accelerator. We partnered with the growing climate tech  startup to evolve their brand and web experience for a better future",
            text2:
              "Understanding what learners want. Usings insights from user interviews, we helped the edtech startup Coursera evolve the UX of their Master Track Certificate product to drive enrollment",
            text3:
              "A trusted design partner for the premier VC in fintech. Whit strategy-led systematic design, we help QEDs portfolio companies bring new brands and products to market",
            text4:
              "Bridging the gap for the connected enterprise. Using abstract 3D models, we created unique animation to show Software AG helps businesses reach their digitally transformed future.",
          },
          work: {
            title: "WORK",
            text: "New Limit",
            text1: "Surf Internet",
            text2: "MODERNIZING A LEGACY TELECOM  BRAND FOR A BRIGHT FUTRE",
            text3: "Focus Vision",
            text4: "TRANSFORMIN COMPLEX TECHNOLOGY INTO MEANINGFUL DESIGN",
            text5: "Take a look at what",
            text6: "we can do for",
          },
          form: {
            name: "Name and Lastname",
            email: "Email",
            company: "Company",
            country: "Country",
            phone: "Phone number",
            message: "Message",
            required: "Required",
          },
          // here we will place our translations...
        },
      },
      es: {
        translation: {
          welcome: {
            title:
              "Nos asociamos con empresas y nuevas empresas con visión de futuro",
            title2: "Nos emociona impulsar tu transformación digital",
          },
          header: {
            h1: "Casos de éxito",
            h2: "Mercados",
            h3: "Paises",
            h4: "Somos VASS",
            h5: "Cómo lo hacemos",
            h6: "Insignias",
            h7: "Noticias",
            h8: "Investigación VASS",
            h9: "Conoce más",
          },
          card: {
            title1: "Marca",
            title2: "Producto",
            title3: "Movimiento",
            title4: "QUÉ HACEMOS - QUÉ HACEMOS - QUÉ HACEMOS - QUÉ HACEMOS -",
          },
          association: {
            text1:
              "Diseño sociable para un acelerador forestal global. Nos asociamos con la creciente startup de tecnología climática para hacer evolucionar su marca y experiencia web para un futuro mejor",
            text2:
              "Comprender lo que quieren los alumnos. Utilizando los conocimientos de las entrevistas con los usuarios, ayudamos a la startup de tecnología educativa Coursera a desarrollar la UX de su producto Master Track Certificate para impulsar la inscripción",
            text3:
              "Un socio de diseño confiable para el principal VC en fintech. Con un diseño sistemático basado en la estrategia, ayudamos a las empresas de la cartera de QED a llevar nuevas marcas y productos al mercado",
            text4:
              "Cerrar la brecha para la empresa conectada. Usando modelos 3D abstractos, creamos una animación única para mostrar que Software AG ayuda a las empresas a alcanzar su futuro transformado digitalmente",
          },
          work: {
            title: "TRABAJO",
            text: "Nuevo Limite",
            text1: "Navegar por Internet",
            text2:
              "MODERNIZANDO UNA MARCA DE TELECOMUNICACIONES LEGADA PARA UN FUTURO BRILLANTE",
            text3: "Enfocar la visión",
            text4: "TTRANSFORMA TECNOLOGÍA COMPLEJA EN DISEÑO SIGNIFICATIVO",
            text5: "Mira lo qué",
            text6: "podemos hacer por",
          },
          form: {
            name: "Nombre y apellido",
            email: "Correo electrónico",
            company: "Empresa",
            country: "Pais",
            phone: "Teléfono o celular",
            message: "Mensaje",
            required: "El campo es requerido",
          },
        },
      },
    },
  });

export default i18n;
