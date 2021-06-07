import { useHistory } from 'umi';

export const usePostedPush = () => {
  const history = useHistory();
  return (href: string) => {
    history.push(href);
    // eslint-disable-next-line no-restricted-globals
    top.postMessage(
      {
        method: 'navigate',
        href: `/docs${href === '/' ? '/getting-started' : href}`,
      },
      '*'
    );
  };
};
