<a href="">
    <img src="https://i.ibb.co/v4fDPtc/ezgif-com-gif-maker-1.webp" alt="3P logo" title="3P" align="right" height="120" />
</a>

<h1 style="margin-top:24px;"><b>DISCOUNTIFY</b></h1>

<h3>The marketing, checkout & product delivery pages.</h3>

<p>
discountify is an open-source SaaS. Originally developed for a bootcamp project.
</p>

<h5>You can view the product <a href='https://discountify.uk'>here.</a></h5>

<br> </br>

<p align="center">
<img src="https://i.ibb.co/ZxSHcFH/discountify-page-capture.png">
</p>

<br></br>

<h3><b>Deploy it</b></h3>

You're going to need:

<ol>
 <li>an rdp with dokku installed </li>
 <li> You then need to make a dokku app </li>
 <li>The dokku postges plugin installed and connected to your app</li>
 <li>A domain thats connected to the app </li>
 <li>Finally, you need to install and setup the dokku lets encrypt plugin</li>
 
 <br> </br>
</ol>
<b> Once Done</b>

Fork the project and add the ssh key to your server <a>here</a>.

Now every push to github will be deployed to your domain on dokku.

<br></br>

<h3><b>Run locally</b></h3>

You're going to need the following on your dev machine:

<ol>
    <li> Node 12+ </li>
    <li> Python 3.9 </li>
    <li> Poetry 1+ </li>

</ol>
    <br> </br>

Then simply run:

<pre>
    <code>
    poetry install
    poetry run python3.9 manage.py liveserver
    </code>
</pre>
