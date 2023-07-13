import { Button } from 'app/components/Button';

export default function ReviewStep() {
  return (
    <div className="flex flexColumn flexCenter flexGap5">
      <div className="lighter">You may already have an account with us</div>
      <Button
        name="Sign In with Your Email"
        icon={{
          name: 'login',
          position: 'left',
        }}
        color="beta"
        fullwidth={true}
        onClick={() => {}}
      ></Button>
      <div className="smaller light">or</div>
      <Button
        name="Continue as Guest"
        color="white"
        inversed={true}
        fullwidth={true}
        onClick={() => {}}
      ></Button>
      <div className="light">You can create an account later if you want</div>
    </div>
  );
}
