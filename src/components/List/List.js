import Video from './items/Video';
import Article from './items/Article';
import withHighlight from '../../hoc/withBacklight';

const VideoBacklight = withHighlight(Video);
const ArticleBacklight = withHighlight(Article);

export default function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <VideoBacklight key={item.id} {...item} />
        );
      case 'article':
        return (
          <ArticleBacklight key={item.id} {...item} />
        );
      default:
        return null;
    }
  });
}
