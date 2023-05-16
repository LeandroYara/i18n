import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobsList";

let localeMessage;
let lang = navigator.language || navigator.userLanguage;
if (lang === "en")
{
    localeMessage = localeEnMessages;
}
else if (lang === "es")
{
    localeMessage = localeEsMessages;
}

ReactDOM.render(
        <IntlProvider locale={lang} messages= {localeMessage}>
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
);
