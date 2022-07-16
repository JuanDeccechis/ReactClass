import React from 'react';

export const LanguageContext = React.createContext('es');

export function withLanguage(Component) {
  // retornamos otro componente
  return function IntlComponent(props) {
    // que envolvemos con el dato de contexto
    return (
      <LanguageContext.Consumer>
        {language => <Component {...props} language={language} />}
      </LanguageContext.Consumer>
    );
  };
}
