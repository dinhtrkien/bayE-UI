const setCookie = (cname, cvalue, extime) => {
  const d = new Date();
  d.setTime(d.getTime() + extime);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

const getCookie = (cname) => {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

const removeCookie = (cname) => {
  const d = new Date();
  d.setTime(d.getTime() - 1); // Set the expiration date to a past date
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=;${expires};path=/`;
};

export { setCookie, getCookie, removeCookie };
