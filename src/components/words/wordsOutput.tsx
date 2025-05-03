import {WordPack, WordPackId} from '../../constants/interfaces';
import commonuk100 from '../../wordPacks/common-uk-100.json';

export default function WordsExport(name: WordPackId) {
  const wordsPAckObj: Record<WordPackId, any> = {
    'common-uk-100': commonuk100,
  };
  return wordsPAckObj[name] as WordPack;
}
