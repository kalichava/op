import { Button } from 'app/components/Button';
import ChangedPrice from 'app/components/ChangedPrice';

export default function AdditionalSavings({ dialog }) {
  return (
    <>
      <p>
        Some items in your cart have new lower prices! These price drops are
        unlikely to last long, so checkout now to take full advantage of the
        savings!
      </p>
      <ul className="flex flexColumn flexGap5 lastChildNoBorder">
        <ChangedPrice
          className="changedPrice item"
          name="Sierra Outdoor Master, 9mm Luger, 115 gr., Jacketed Hollow Point/JHP, Brass Cased Rifle Ammo, 20 Rounds, A81100120"
          oldPrice={289.99}
          newPrice={275.5}
          key={0}
        ></ChangedPrice>
        <ChangedPrice
          className="changedPrice item"
          name="Triggertech Diamond Trigger, AR-15, Curved, 1.5 - 4 lbs, PVD Black, AR0-TRB-14-NNC"
          oldPrice={49.99}
          newPrice={48.9}
          key={1}
        ></ChangedPrice>
      </ul>
      <Button
        name="Thanks. I'm Informed"
        icon={{
          name: 'check',
          position: 'left',
        }}
        color="beta"
        fullwidth={true}
        onClick={() => dialog.hide()}
      ></Button>
    </>
  );
}
