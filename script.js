var api_key = 'AIzaSyA1c99hcmkhnVWKySb2-IBycwRnB-H9ofY';
var api_url = 'https://www.googleapis.com/youtube/v3/';
var channel_id = 'UCxLqI9UMt26HQHktqWi1PYA';

var subscribers_url = `${api_url}channels?part=statistics&id=${channel_id}&key=${api_key}`;
var picture_url = `${api_url}channels?part=snippet&id=${channel_id}&key=${api_key}`;

async function getGubbSubs() {
    const response = await fetch(subscribers_url);
    const data = await response.json();
    const subs = data.items[0].statistics.subscriberCount;

    let start = 0;

    let increase = setInterval(() => {
        start += 1;
        document.getElementById('subs').innerHTML = start;
        if(start == subs){
            clearInterval(increase)
        }

    }, 1)
}

async function getGubbThumb() {
    const response = await fetch(picture_url);
    const data = await response.json();
    const thumb = data.items[0].snippet.thumbnails.medium.url;
    const title = data.items[0].snippet.title;
    document.getElementById('img-bg').src = thumb;
    document.getElementById('img-avatar').src = thumb;
    document.getElementById('title').innerHTML = title;
}

getGubbSubs();
getGubbThumb();