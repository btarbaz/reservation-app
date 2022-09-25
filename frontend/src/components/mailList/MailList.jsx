import { MailContainer, MailInputContainer } from './mailList.styles';

const MailList = () => {
  return (
    <MailContainer>
      <h1>Save time, save money!</h1>
      <span>Sign up and we'll send the best deals to you</span>
      <MailInputContainer>
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </MailInputContainer>
    </MailContainer>
  );
};
export default MailList;
