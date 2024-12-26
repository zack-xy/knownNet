import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';
import SHA256 from 'crypto-js/sha256';

const generateId = (input: string) => {
  // 使用 CryptoJS 的 sha256 函数对输入字符串进行哈希处理
  let hash = SHA256(input);
  // 将哈希结果转换为字符串
  let hashString = hash.toString();
  // 确保结果长度不超过 50 个字符
  if (hashString.length > 50) {
    hashString = hashString.slice(0, 50);
  }
  return hashString;
};

export default function createGitalk(path: string) {
  const gitalk = new Gitalk({
    clientID: 'Ov23lidOl66QbnUY8TNa',
    clientSecret: '0b4ef74086a4b2b64668f7043acbe3c67b53a96a',
    repo: 'knownNet',
    owner: 'zack-xy',
    admin: ['zack-xy'],
    id: generateId(path),      // 确保唯一性和长度小于 50
    distractionFreeMode: false  // 类似 facebook 的无干扰模式
  });
  gitalk.render('gitalk-container');
}
