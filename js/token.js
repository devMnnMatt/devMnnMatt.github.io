const track = scrobbles && scrobbles.recenttracks && scrobbles.recenttracks.track;

if (track && track.length > 0) {
    const trarray = track[0];
    if (trarray['@attr'] && trarray['@attr']['nowplaying']) {
        console.log('Playing');
    } else {
        console.log('Not playing');
    }
} else {
    console.log('Not playing');
}
