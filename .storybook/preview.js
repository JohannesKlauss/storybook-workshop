import {Box, ChakraProvider, extendTheme, LightMode, Skeleton} from '@chakra-ui/react';
import {RecoilRoot} from "recoil";
import * as React from "react";
import {customTheme} from "../src/theme";

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    return (
      <RecoilRoot>
        <ChakraProvider theme={customTheme}>
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