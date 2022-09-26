


  function fetch1() {
    let headers = new Headers();
    headers.append("Authorization", "Basic R0s4ZFk1QUdxeUdRYnBTNXEzYzd0S2FHZ2JieVRjTDM6Y0tSVmhiNWI1c1ZIcjEyaw==");
    headers.append('Access-Control-Allow-Origin', '*')
    headers.append("mode", 'no-cors');
    headers.append("Accept", '*/*');
    fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", { headers })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

  const button = document.getElementsByTagName("Button")[0];
  button.addEventListener('click',fetch1);