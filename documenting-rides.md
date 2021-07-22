## Documenting Rides <a id="documenting-rides"></a>
I've enjoyed tracking and documenting my rides on a few services:

### Strava <a id="strava"></a>
I really like [Strava](strava.com) for recording and sharing rides. I pay them an annual fee, the app is well built, and they don't try to own my data in any way. It is also serves as a nice shared-interest-driven social network.

### [wandrer.earth](https://wandrer.earth/) <a id="wandrer.earth"></a>
This is an app I love that lives on top of Strava's API, imports your Strava history, and gives you cool statistics and visualizations about where you've been.

The "[Big Map](https://wandrer.earth/dashboard/map#7.75/40.618/-73.792)" is one of the main attractions:

![Map of places I've explored in NYC, NJ, Westchester County, and Connecticut](https://user-images.githubusercontent.com/465045/125385676-f1564980-e368-11eb-95c0-0f844dbedaae.png)

I have a shortcut to this page on my phone home screen. On some rides I leave it open and use it to navigate in real-time, trying to ride as many new/unexplored roads as possible. It's really fun and a cool way to explore an area.

wandrer.earth also showcases some good open-data norms in the apps people use for these purposes; it sits on top of Strava and provides some additional, more niche features that I also pay for (separate from my underlying Strava subscription). After all the perversity of consumers' relationships to big, ad-driven tech co's, there's something nice about having these clear, transactional relationships with developers making useful apps but not trying to own me or my data or my eyeballs!

### YouTube <a id="youtube"></a>
I've posted a few ride videos to [a Neighbor Ryan YouTube channel](https://www.youtube.com/channel/UCUEDi4kDGExvmx0g0gkVwkA/videos).

### Post-Processing Videos <a id="post-processing"></a>
When you start filming rides (cf. ["Action Cameras"](#action-cameras)), you'll quickly generate huge amounts of data. My GoPro can shoot 4K60, but I learned the hard way to ratchet down to 1080p24. GoPros cut shots into 4GB "chapters" (≈11mins at that resolution). My laptop's 1TB SSD could hold ≈45hrs of this "low"-res video (if I had nothing else on it).

#### External SSDs <a id="ssds"></a>
I started with [a 1TB external SSD][amzn 1TB SSD] and added [a 2TB][amzn 2TB SSD] later. These things are pretty incredible, they fit in your palm:

#### Wasabi Cloud Storage <a id="wasabi"></a>
Eventually I filled up the 2TB too, and started putting data in [Wasabi][wasabi] (cheap cloud storage w/ good tooling). I'm stil in the free trial, but planning to use it as my canonical/archival store going forward, script moving new videos there automatically, and setting up downstream pipelines. My SSDs are not backed up anywhere so they might become an [LRU cache] of data in Wasabi. Given the price points, I'd rather pay-as-I-go on Wasabi than capacity-plan and deploy a RAID array on my desk 😁.

#### 512GB micro-SIM <a id="sim"></a>
In some sense the most absurd piece of technology I use is [this 512GB micro-SIM][amzn 512GB micro-SIM] that the GoPro records to:

![side-by-side of a 512GB micro-SIM card and a quarter (the latter about 3x the size)](https://user-images.githubusercontent.com/465045/110189779-55329980-7dee-11eb-9560-d058743ed859.png)
*where does all that data go…? 🤯*

I started with smaller SIMs, but worrying about the camera card's capacity was too annoying (on top of juggling battery + spares and archival storage capacity post-ride), and ultimately solvable for $75.

#### VFX Suites <a id="vfx"></a>
I resisted using proper VFX suites to process my GoPro videos for a long time, but ultimately caved, bought [Final Cut Pro][fcp], and have been learning to use it. It does a good job abstracting over the 4GB GoPro "chapter" files that every shot is broken into, and is easy to use for speeding up / cutting video. The export flows are a bit clunky (videos as `.mov` only, frames as `.tiff`; I'm sure I'm missing things…) and I already want to script things on top of it, but it's a good start and very powerful beyond what I've learned.

https://goprotelemetryextractor.com/ seems good and able to deal with GoPro GPS/speed/etc. (which I've also not cracked in FCP).

I used to use GoPro's "Quik" app just for an auto-import when I plug my SIM in; I never found the VFX features usable. I've since given up on it altogether.

<!-- ## Favorite Rides <a id="favorite-rides"></a>
TODO
 -->
