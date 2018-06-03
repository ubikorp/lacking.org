---
title: "Episode 0100: Keep Brevard Weird"
subtitle: September 6, 2016
category: podcast
author: jclacking
podcast:
  airdate: 2016-09-06
  name: "0100: Keep Brevard Weird"
  src: podcast/0001-0100/0100.keep-brevard-weird.mp3
image:
  src: podcasts/100-keep-brevard-weird.jpg
  caption: Farewell, Space Coast
---

{% include components/audio_player.html %}

This is the final episode of The Lacking Organization broadcast on WFIT on September 6, 2016. It features guests Ryan Blount and Patty Bleu, who perform songs from their upcoming split 7" and get dragged down the verbal path by yours truly. In between and all around, we play a selection of original music originating in the Brevard County, Florida area, ranging from the last 30 years.

I would like to thank everyone who contributed music for this episode. I received so many amazing entries, but in the end I had about three times more music than I could fit. I picked a couple of personal favorites and let the random do its business. If you sent me a track and it's not here, I apologize for the luck of the draw.

It has been a pleasure to bring this haphazard collection of random sonic excursions to the ears of listeners in Brevard County for eight years. I appreciate all the emails, tweets, messages, and phone calls, even if they have gone unanswered in the frantic cycle that is a weekly radio show. The Lacking Organization may now be off the air, but as one door closes, many others open. Stay tuned for the return of this mess of a musical aggregate in one form or another!

{% assign podcast_playlist = site.data.master_playlist | where:"podcast_airdate", page.podcast.airdate %}
{% include components/artists.html playlist=podcast_playlist %}
<!--more-->
{% include components/playlist.html playlist=podcast_playlist %}
