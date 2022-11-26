import { ReactElement, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const QuillWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  // 사이즈(마크다운), 컬러, 텍스트 하이라이터, 정렬, 취소선/볼드/밑줄/이탤릭
  toolbar: [
    [
      { size: ['small', false, 'large', 'huge'] },
      { color: [] },
      { background: [] },
      { align: ['', 'center', 'right'] },
      'bold',
      'italic',
      'underline',
      'strike',
    ],
  ],
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'size',
  'color',
  'background',
  'align',
  'bold',
  'italic',
  'underline',
  'strike',
];

const TextEditor = (): ReactElement => {
  const [content, setContent] = useState<string>('');
  console.log(content);
  return (
    <QuillWrapper
      id='ggogeet-text-editor'
      placeholder='편지를 작성해주세요.'
      theme='snow'
      modules={modules}
      formats={formats}
      value={content}
      onChange={setContent}
    />
  );
};

export default TextEditor;
