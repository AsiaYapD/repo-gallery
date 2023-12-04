
/* Where my profile information will appear  */ 
const overview = document.querySelector(".overview");
const username = "AsiaYapD";


const getUserInfo = async function() {
    const userInfo = await fetch(`https://api.github.com/users/${username}`);
    const data = await userInfo.json();
    //console.log(data);

};
getUserInfo();