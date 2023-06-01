import * as React from 'react';

export function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="40" fill="none">
      <g clipPath="url(#a)">
        <path
          fill="url(#b)"
          d="M68.41 24.507c.696 0 1.254-.522 1.254-1.185V4.77c0-.626-.558-1.15-1.255-1.15-.697 0-1.29.522-1.29 1.15v18.554c0 .661.558 1.185 1.29 1.185v-.002Zm-9.092-18.45h1.671v17.267c0 .661.557 1.185 1.29 1.185.732 0 1.254-.521 1.254-1.185V6.056h1.707c.697 0 1.254-.521 1.254-1.184 0-.626-.557-1.15-1.254-1.15h-5.922c-.697 0-1.254.522-1.254 1.15 0 .66.557 1.184 1.254 1.184ZM45.734 24.541c1.88 0 3.378-1.393 3.378-3.132V6.649c0-1.706-1.498-3.1-3.379-3.1-1.88 0-3.342 1.394-3.342 3.1v14.76c0 1.742 1.498 3.133 3.343 3.133ZM44.931 6.65c0-.418.384-.766.837-.766.488 0 .837.348.837.766v14.76c0 .418-.384.802-.837.802-.453 0-.837-.384-.837-.801V6.649Zm6.966 17.858c.696 0 1.29-.522 1.29-1.185v-8.39h.836c1.88 0 3.378-1.426 3.378-3.132V6.822c0-1.706-1.498-3.1-3.378-3.1h-2.091c-.697 0-1.254.522-1.254 1.15v18.452c-.035.661.557 1.185 1.219 1.185v-.002Zm1.29-18.45h.836c.488 0 .837.348.837.765V11.8c0 .417-.384.8-.837.8h-.837V6.057Zm32.044 23.08a.494.494 0 0 0-.488.348l-1.115 3.307-1.114-3.307a.525.525 0 0 0-.488-.348.534.534 0 0 0-.522.521v8.181c0 .28.245.522.522.522a.536.536 0 0 0 .522-.522v-4.978l-.036-.836.105.384 1.01 3.236 1.01-3.236.104-.384-.036.836v4.978c0 .28.244.522.522.522a.536.536 0 0 0 .522-.522v-8.181c-.036-.28-.245-.521-.522-.521h.004ZM73.6 29.1c-.766 0-1.394.626-1.394 1.358v6.509c0 .765.626 1.393 1.394 1.393.768 0 1.394-.626 1.394-1.393v-.593a.534.534 0 0 0-.522-.521.536.536 0 0 0-.522.521v.593a.35.35 0 0 1-.348.348c-.173 0-.349-.173-.349-.348v-6.476a.35.35 0 0 1 .349-.348c.209 0 .349.14.349.348v.592c0 .28.244.522.521.522a.536.536 0 0 0 .522-.522v-.592c0-.765-.626-1.393-1.394-1.393v.002ZM20.063 1.29c-10.345 0-18.74 8.354-18.74 18.659 0 10.304 8.395 18.659 18.74 18.659 10.346 0 18.74-8.355 18.74-18.66 0-10.304-8.396-18.658-18.74-18.658Zm14.421 17.44c1.323 1.88 2.056 4.178 2.056 4.178s-1.186-1.358-2.229-2.367a20.23 20.23 0 0 0-1.847-1.497s-.208-1.01-.626-2.055c-.417-1.044-.974-2.122-.974-2.122s2.16 1.81 3.622 3.864h-.002Zm-24.138 7.38c-1.916-1.15-3.134-1.775-3.134-1.775s.557-.801.974-1.602c.384-.8.697-1.637.697-1.637s1.847.592 3.691 1.289c2.091.8 4.18 1.774 4.18 1.774s-.418 1.185-1.01 2.367c-.522 1.045-1.254 2.159-1.254 2.159s-2.437-1.566-4.144-2.576Zm3.795 3.098s-.732 1.185-1.567 2.194c-.836 1.01-1.846 1.984-1.846 1.984S9.3 31.992 7.802 30.6c-1.567-1.462-3.238-2.889-3.238-2.889s.592-.592 1.185-1.253c.626-.766 1.254-1.602 1.254-1.602s1.15.557 2.577 1.427c2.02 1.253 4.563 2.924 4.563 2.924h-.002Zm4.424-12.846c-.069-1.01-.244-2.019-.244-2.019s1.671.244 3.483.697c1.81.452 3.795 1.149 3.795 1.149s.244 1.289.313 2.542c.07 1.289.036 2.575.036 2.575s-1.743-.8-3.587-1.497c-1.847-.696-3.762-1.253-3.762-1.253s.035-1.114-.036-2.194h.002Zm3.239-1.95c-1.672-.417-3.692-.697-3.692-.697s-.348-1.045-.765-1.983c-.385-.836-.802-1.566-.802-1.566s1.254-.07 2.926.14c1.638.208 3.762.696 3.762.696s.766 1.045 1.358 2.298c.418.837.733 2.09.733 2.09s-1.603-.521-3.518-.974l-.002-.004ZM9.786 15.489c-.035-.661-.173-1.426-.173-1.426s1.88-.174 3.796-.14c2.09.035 4.248.313 4.248.313s.244 1.113.349 2.194c.069.974 0 1.95 0 1.95s-1.567-.418-3.623-.801c-2.02-.384-4.528-.661-4.528-.661s-.035-.697-.069-1.427v-.002Zm9.718-5.675c-1.671-.208-3.414-.173-3.414-.173s-.488-.696-1.079-1.393c-.625-.696-1.531-1.322-1.531-1.322s1.531-.173 3.1-.069c1.255.069 2.753.348 2.753.348s.87.557 1.567 1.185c.975.905 1.847 2.054 1.847 2.054s-1.603-.417-3.239-.625l-.004-.005Zm-2.681 2.09c.384.836.626 1.67.626 1.67s-1.985-.208-4.076-.243c-1.846-.036-3.866.14-3.866.14s-.173-.626-.417-1.15a8.547 8.547 0 0 0-.802-1.357s1.776-.349 3.623-.557c1.88-.173 3.935-.173 3.935-.173s.557.836.975 1.67h.002Zm-7.35 7.172c.174-.836.313-1.637.313-1.637s2.02.209 4.111.592c2.02.417 4.111 1.01 4.111 1.01s-.069 1.253-.348 2.506c-.21 1.045-.627 2.055-.627 2.055s-1.95-.87-3.97-1.67c-1.952-.733-3.971-1.358-3.971-1.358s.208-.837.384-1.498h-.003Zm6.724 7.729c.592-1.253 1.045-2.471 1.045-2.471s1.742.87 3.518 1.845a487.39 487.39 0 0 1 3.762 2.123s-.625 1.531-1.322 2.924c-.733 1.427-1.532 2.751-1.532 2.751s-1.323-1.114-2.89-2.298a137.013 137.013 0 0 0-3.762-2.715s.697-1.114 1.185-2.159h-.004Zm4.84-1.185c-1.742-.905-3.517-1.81-3.517-1.81s.384-1.078.626-2.158c.244-1.15.348-2.436.348-2.436s1.394.348 3.31 1.045c1.775.66 4.04 1.741 4.04 1.741s-.105 1.53-.385 2.924a23.855 23.855 0 0 1-.697 2.715s-1.915-1.044-3.726-2.018l.002-.003Zm5.017-.696c.244-1.218.384-2.68.384-2.68s1.742.836 3.31 1.846a60.763 60.763 0 0 1 2.785 1.914s-.069 1.393-.488 3.168c-.28 1.253-.941 3.203-.941 3.203s-1.498-1.288-2.997-2.402c-1.462-1.078-2.89-1.983-2.89-1.983s.489-1.498.837-3.064v-.002Zm6.444.384s-1.323-1.01-2.648-1.846c-1.638-1.01-3.379-1.88-3.379-1.88s.07-1.184 0-2.402c-.068-1.357-.28-2.75-.28-2.75s1.29.452 2.822 1.253c1.358.732 2.997 1.81 2.997 1.81s.348 1.531.488 3.064c.104 1.289 0 2.75 0 2.75Zm-.733-6.72s-1.531-1.01-2.89-1.67c-1.427-.697-2.89-1.218-2.89-1.218s-.384-1.254-.837-2.367c-.417-1.01-1.045-1.915-1.045-1.915s1.045.173 2.404.801c1.219.557 3.065 1.741 3.065 1.741s.626.837 1.219 2.055c.557 1.149.974 2.575.974 2.575v-.002Zm-1.638-5.118c.28.28.558.626.558.626l-.733-.488-.453-.697c-.035 0 .28.244.626.557l.002.002Zm-1.15-.521s-1.742-1.045-2.96-1.566c-1.115-.488-2.473-.801-2.473-.801s-.557-.801-1.254-1.53c-.662-.766-1.707-1.567-1.707-1.567s2.544.8 4.215 1.914c2.02 1.358 4.18 3.552 4.18 3.552v-.002Zm-9.3-6.509a14.54 14.54 0 0 1 1.394.697l-1.567-.349-1.114-.696s.592.035 1.29.348h-.003Zm-8.951-2.09s2.09 0 3.622.522c1.776.625 3.727 1.53 3.727 1.53s-1.847-.173-3.101-.14c-1.15.036-2.09.174-2.09.174s-.733-.488-1.533-.905c-.732-.384-1.567-.661-1.567-.661l.941-.522v.002ZM7.59 6.578c.662-.593 1.603-1.29 1.603-1.29s.697.174 1.29.453c.66.349 1.498.837 1.498.837s-1.603.173-3.101.592c-1.359.384-2.752.974-2.752.974s.661-.8 1.462-1.566Zm1.707.974c1.532-.384 3.343-.593 3.343-.593s.837.593 1.532 1.254a12.106 12.106 0 0 1 1.254 1.426s-1.672.036-3.379.209c-2.02.208-4.144.592-4.144.592s-.417-.557-.87-1.045c-.453-.452-.94-.8-.94-.8S7.66 7.968 9.297 7.55v.002Zm-4.807 2.715c.452-.732.974-1.393.974-1.393s.522.348.906.696c.452.453.905 1.079.905 1.079s-1.01.244-1.984.556c-.837.244-1.603.522-1.603.522s.453-.837.802-1.462v.002ZM3.028 13.33c.173-.417.417-.87.417-.87s1.15-.417 1.985-.661c1.218-.384 2.264-.593 2.264-.593s.452.626.732 1.254c.28.592.348 1.149.348 1.149s-1.567.104-3.17.28c-1.53.173-2.996.52-2.996.52s.209-.556.418-1.077l.002-.002Zm-.802 2.435c.105-.383.28-.8.28-.8s1.394-.313 2.786-.488a54.409 54.409 0 0 1 3.762-.349s.173.732.244 1.427c.07.66 0 1.322 0 1.322s-1.776-.173-3.622-.244c-1.743-.069-3.554-.069-3.554-.069s0-.384.104-.8v.001ZM1.81 17.96c.036-.383.104-.8.104-.8s1.532-.07 3.274 0c1.88.068 4.007.244 4.007.244s-.069.8-.28 1.566c-.173.732-.488 1.462-.488 1.462s-1.88-.593-3.691-1.01c-1.463-.348-2.926-.592-2.926-.592s-.035-.452 0-.87Zm-.069 2.543v-1.114s1.29.173 2.821.557c1.707.417 3.692.974 3.692.974s-.28.836-.662 1.601c-.382.766-.87 1.567-.87 1.567s-1.394-.766-2.648-1.393a44.134 44.134 0 0 0-2.264-1.079s-.069-.592-.069-1.113Zm.557 3.968c-.28-1.044-.488-2.227-.488-2.227s.801.28 1.916.87c1.185.592 2.717 1.497 2.717 1.497s-.626.905-1.255 1.67c-.488.593-1.045 1.15-1.045 1.15l-1.254-1.01c0-.069-.349-.94-.593-1.95h.002Zm1.08 3.204c-.07-.14.035-.28.035-.28l.488.384-.209.173a.53.53 0 0 1-.313-.28l-.002.003Zm2.785 4.142c-1.358-1.531-2.3-3.341-2.3-3.341l.349-.349s1.532 1.393 3.03 2.784c1.531 1.462 3.1 2.889 3.1 2.889s-.173.28-.417.521c-.208.244-.521.453-.521.453s-1.847-1.358-3.239-2.96l-.002.003Zm5.365 4.246c-.906-.453-1.638-.974-1.638-.974l.905-.837s.626.661 1.29 1.323c.661.66 1.394 1.357 1.394 1.357s-1.114-.417-1.951-.87Zm5.016 1.81a19.494 19.494 0 0 1-1.95-.488l-3.415-3.48s.941-1.01 1.743-2.02c.905-1.113 1.707-2.367 1.707-2.367s1.602 1.045 3.238 2.263a99.514 99.514 0 0 1 3.45 2.75s-.733 1.079-1.499 2.055a31.32 31.32 0 0 1-1.323 1.566s-.94-.104-1.95-.28Zm5.434.244c-1.29.173-2.753.104-2.753.104s.662-.765 1.29-1.566c.662-.87 1.254-1.775 1.254-1.775s.766.557 1.532 1.218a33.252 33.252 0 0 1 1.531 1.427s-1.358.417-2.856.592h.002Zm8.01-2.924s-1.01.8-2.124 1.322c-1.15.557-2.368.836-2.368.836s-.766-.732-1.603-1.497c-.87-.8-1.846-1.53-1.846-1.53s.87-1.394 1.602-2.785a31.687 31.687 0 0 0 1.323-2.924s1.427.87 2.89 1.984a72.493 72.493 0 0 1 3.03 2.47s-.14.522-.384 1.046c-.209.521-.522 1.078-.522 1.078h.003Zm1.324-.87-.558.417s.209-.348.384-.732c.14-.313.209-.625.209-.625l.417.488c0 .035-.208.244-.453.452Zm3.17-3.099c-1.01 1.218-2.3 2.436-2.3 2.436s-.07-.313-.244-.452l-.385-.384s.627-1.775 1.01-3.412c.349-1.462.453-3.064.453-3.064s.837.626 1.603 1.358c.626.592 1.358 1.53 1.358 1.53s-.87 1.219-1.498 1.984l.002.004Zm2.472-4.004s-.244.557-.418.905c-.14.313-.348.592-.348.592s-.941-1.149-1.776-1.914c-.661-.626-1.394-1.114-1.394-1.114s.07-1.845-.035-3.236a18.785 18.785 0 0 0-.349-2.472s1.323.94 2.229 1.846a22.064 22.064 0 0 1 1.742 1.983s.349 1.078.418 2.019c.035.8-.07 1.393-.07 1.393v-.002Zm-.036-4.177s.209.069.384.452c.209.384.384 1.218.384 1.218l-.626-.87-.14-.8h-.002Zm.697 2.402s-.035.28-.104.417c-.069.174-.173.313-.173.313v-.592c0-.28-.209-1.045-.209-1.045s.349.453.453.592c.035.105.035.313.035.313l-.002.002Zm40.336-5.362c0-.66-.558-1.184-1.29-1.184s-1.254.521-1.254 1.184v1.323c0 .417-.384.8-.837.8-.453 0-.837-.383-.837-.8V6.649c0-.418.384-.766.837-.766.489 0 .837.348.837.766v1.357c0 .626.557 1.15 1.254 1.15s1.29-.522 1.29-1.15V6.65c0-1.706-1.499-3.1-3.379-3.1s-3.343 1.394-3.343 3.1v14.76c0 1.742 1.499 3.133 3.343 3.133 1.845 0 3.379-1.393 3.379-3.132v-1.327Zm-25.775 10.06c-.209 0-.348.14-.348.35v2.61h.732v-2.61c-.035-.174-.173-.35-.384-.35Zm17.347-2.923h-30.58c.87-2.227 1.322-4.665 1.322-7.172C40.264 8.982 31.244 0 20.132 0 8.987 0 0 8.982 0 20.052 0 30.461 7.942 38.991 18.148 40h51.376v-.8h.974v-1.984h-.974v-9.992l-.002-.004Zm-49.46 11.975C9.368 39.199.731 30.565.731 19.912.732 9.26 9.37.662 20.063.662c10.695 0 19.331 8.633 19.331 19.25 0 10.618-8.639 19.287-19.33 19.287l-.003-.004Zm25.532-6.44c0 .765-.662 1.393-1.498 1.393h-.349v3.69c0 .279-.244.52-.557.52-.313 0-.557-.243-.557-.52V29.69c0-.28.244-.521.557-.521h.906c.836 0 1.498.626 1.498 1.358v2.227Zm3.449 5.5h-1.427c-.313 0-.557-.245-.557-.522v-8.077c0-.28.244-.521.557-.521.313 0 .557.243.557.52v7.59h.87c.313 0 .557.244.557.521 0 .278-.244.488-.557.488Zm4.597-.453c0 .28-.244.521-.557.521-.313 0-.557-.244-.557-.521v-3.69h-.733v3.69c0 .28-.244.521-.557.521-.313 0-.557-.244-.557-.521v-7.31c0-.765.661-1.358 1.463-1.358.801 0 1.498.626 1.498 1.358v7.31Zm5.19 0c0 .28-.245.521-.558.521-.313 0-.557-.244-.557-.521v-1.045l-1.254-3.725-.209-.836v5.57c0 .28-.244.522-.557.522-.313 0-.557-.244-.557-.522v-8.11c0-.28.244-.521.557-.521.244 0 .453.14.522.348l1.219 3.69.28 1.008v-4.525c0-.28.243-.521.556-.521.313 0 .558.243.558.52v8.147Zm3.482-4.699c.313 0 .557.244.557.522 0 .277-.244.521-.557.521h-.87v3.132h.87c.313 0 .557.244.557.522 0 .277-.244.521-.557.521h-1.427c-.313 0-.557-.244-.557-.521v-8.11c0-.28.244-.522.557-.522h1.427c.313 0 .557.244.557.521 0 .278-.244.522-.557.522h-.87v2.855h.87V33.103Zm4.564-2.888h-.733v7.589c0 .28-.244.521-.557.521-.313 0-.557-.244-.557-.521v-7.59h-.732c-.313 0-.558-.243-.558-.52 0-.278.245-.522.558-.522h2.577c.313 0 .557.244.557.521a.566.566 0 0 1-.557.522h.002Zm2.612 8.982h-1.01v-1.983h1.01v1.983Zm-25.357-8.982h-.349v2.855h.349c.209 0 .384-.173.384-.348v-2.194c0-.14-.173-.313-.384-.313ZM82.62 3.552c-1.847 0-3.343 1.393-3.343 3.099v4.63c0 .87.313 1.601 1.01 2.227l2.96 2.75a.744.744 0 0 1 .245.557v4.595c0 .417-.384.8-.837.8-.453 0-.837-.383-.837-.8v-1.322c0-.662-.557-1.185-1.29-1.185-.732 0-1.253.521-1.253 1.185v1.322c0 1.741 1.498 3.132 3.343 3.132 1.844 0 3.378-1.393 3.378-3.132v-4.595c0-.87-.349-1.601-1.01-2.227l-2.997-2.75a.755.755 0 0 1-.244-.557V6.649c0-.418.384-.766.837-.766.488 0 .837.348.837.766v1.357c0 .626.557 1.15 1.254 1.15s1.29-.522 1.29-1.15V6.65c.035-1.706-1.463-3.1-3.343-3.1v.003Zm-4.18 25.551c-.766 0-1.394.626-1.394 1.358v6.509c0 .765.626 1.393 1.394 1.393.768 0 1.394-.626 1.394-1.393v-6.476c-.036-.765-.626-1.393-1.394-1.393v.002Zm.349 7.867a.35.35 0 0 1-.349.348c-.173 0-.349-.173-.349-.348v-6.476a.35.35 0 0 1 .349-.348c.209 0 .349.14.349.348v6.476Z"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="43"
          x2="43"
          y1="-.722"
          y2="39.278"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2A4C8A" />
          <stop offset=".47" stopColor="#213D71" />
          <stop offset="1" stopColor="#182951" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h86v40H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}