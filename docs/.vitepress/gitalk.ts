import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';

export default function createGitalk(path: string) {
  const gitalk = new Gitalk({
    clientID: 'Ov23lidOl66QbnUY8TNa',
    clientSecret: '0b4ef74086a4b2b64668f7043acbe3c67b53a96a',
    repo: 'knownNet',
    owner: 'zack-xy',
    admin: ['zack-xy'],
    id: path,      // 确保唯一性和长度小于 50
    distractionFreeMode: false  // 类似 facebook 的无干扰模式
  });
  gitalk.render('gitalk-container');
}
