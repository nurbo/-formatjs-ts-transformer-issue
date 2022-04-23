import { jsx as _jsx } from "react/jsx-runtime";
// @intl project:my-project
import { defineMessage, FormattedMessage, useIntl, } from 'react-intl';
export const message = defineMessage({
    description: "define-message",
    defaultMessage: "define-message",
});
export const SelfClosingElement = () => (_jsx(FormattedMessage, { defaultMessage: "self-closing", description: "self-closing" }));
export const Element = () => (_jsx(FormattedMessage, { defaultMessage: "element", description: "element" }));
export const Hook = () => {
    const intl = useIntl();
    return intl.formatMessage({ description: "hook", defaultMessage: "hook" });
};
//# sourceMappingURL=index.js.map