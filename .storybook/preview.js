import {Box, ChakraProvider, extendTheme, LightMode, Skeleton} from '@chakra-ui/react';
import {RecoilRoot} from "recoil";
import * as React from "react";

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

export const decorators = [
  (Story) => {
    return (
      <RecoilRoot>
        <ChakraProvider theme={extendTheme({config})}>
          <React.Suspense fallback={<Skeleton h={24}/>}>
            <Box minH={'calc(100vh - 2rem)'} minW={'100%'}>
              <Story/>
            </Box>
          </React.Suspense>
        </ChakraProvider>
      </RecoilRoot>
    );
  },
];