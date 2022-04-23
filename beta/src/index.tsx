// @intl project:my-project
import {
  defineMessage,
  FormattedMessage,
  useIntl,
} from 'react-intl';

export const message = defineMessage({
  description: "define-message",
  defaultMessage: "define-message",
});

export const SelfClosingElement = () => (
  <FormattedMessage defaultMessage="self-closing" description="self-closing" />
);

export const Element = () => (
  <FormattedMessage
    defaultMessage="element"
    description="element"
  ></FormattedMessage>
);

export const Hook = () => {
  const intl = useIntl();

  return intl.formatMessage({ description: "hook", defaultMessage: "hook" });
};
