import { Button } from 'app/components/Button';

export default function RetrieveYourCart({ dialog }) {
  return (
    <div className="flex flexColumn flexGap4">
      <div>
        <div className="title title--sm addBottom2">Merge</div>
        <p className="smaller">
          Ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo est
          orci,r vitae volutpat quam pellentesque nec.
        </p>
      </div>
      <hr className="addBottom3"></hr>
      <div>
        <div className="title title--sm addBottom2">Replace</div>
        <p className="smaller">
          Nam posuere purus neque, vel dapibus erat dignissim quis. Donec sed
          elit vitae massa vulputate volutpat. Praesent ac convallis enim.{' '}
        </p>
      </div>
      <Button
        name="Merge my carts"
        color="alpha"
        fullwidth={true}
        inversed={false}
      ></Button>
      <Button
        name="Replace with items from previous session"
        color="beta"
        fullwidth={true}
        inversed={false}
      ></Button>
      <div className="smaller light flex flexCenter">or</div>
      <Button
        name="Close"
        color="white"
        fullwidth={true}
        inversed={true}
        onClick={() => dialog.hide()}
      ></Button>
    </div>
  );
}
