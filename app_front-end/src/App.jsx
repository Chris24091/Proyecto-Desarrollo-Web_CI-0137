import { AppRouter } from './router/AppRouter';
import { Footer } from './ui/components/Footer';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
    id: '0',
    message: 'Bienvenido!',

    // This calls the next id
    // i.e. id 1 in this case
    trigger: '1',
  }, {
    id: '1',

    // This message appears in
    // the bot chat bubble
    message: 'Nos brindas tu nombre de usuario?',
    trigger: '2'
  }, {
    id: '2',

    // Here we want the user
    // to enter input
    user: true,
    trigger: '3',
  }, {
    id: '3',
    message: " Hola {previousValue}, tu consulta es acerca de:",
    trigger: 4
  }, {
    id: '4',
    options: [

      // When we need to show a number of
      // options to choose we create alist
      // like this
      { value: 1, label: 'Productos' },
      { value: 2, label: 'Sucursales' },
      { value: 3, label: 'Promociones' },
      { value: 4, label: 'Problemas de cuenta' },

    ],
    end: true
  }
];

const theme = {
  background: 'rgb(218, 212, 199)',
  headerBgColor: '#E4E751',
  headerFontSize: '20px',
  botBubbleColor: '#E4E751',
  headerFontColor: '#290D0D',
  botFontColor: 'black',
  userBubbleColor: '#290D0D',
  userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  floating: true,
};

export const App = () => {
  return (
    <>
      <AppRouter />
      <ThemeProvider theme={theme}>
        <ChatBot

          // This appears as the header
          // text for the chat bot
          headerTitle="BatiBot"
          steps={steps}
          {...config}

        />
      </ThemeProvider>
      <Footer />
    </>
  )
}

