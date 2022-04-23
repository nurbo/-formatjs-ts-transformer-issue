import { jsx as _jsx } from "react/jsx-runtime";
// @intl project:my-project
import { defineMessage, FormattedMessage, useIntl, } from 'react-intl';
export const message = defineMessage({ id: "xKLq8t", defaultMessage: [{ type: 0, value: "define-message" }] });
export const SelfClosingElement = () => (_jsx(FormattedMessage, { id: 'GtoxSJ', defaultMessage: [{ type: 0, value: "self-closing" }] }));
export const Element = () => (_jsx(FormattedMessage, { id: 'wc8wN1', defaultMessage: [{ type: 0, value: "element" }] }));
export const Hook = () => {
    const intl = useIntl();
    return intl.formatMessage({ id: "834/FM", defaultMessage: [{ type: 0, value: "hook" }] });
};
//# sourceMappingURL=index.js.map