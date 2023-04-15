export class YoutubeVideo {
  createIframe(id) {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', this.generateURL(id));
    iframe.classList.add('video');

    return iframe;
  }
  generateURL(id) {
    const params = '?rel=0&showinfo=0&autoplay=1';

    return `https://www.youtube.com/embed/${id}{params}`;
  }
}
