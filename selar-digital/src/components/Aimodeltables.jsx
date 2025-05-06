import React, { useEffect, useRef } from 'react';
import { DataTable } from 'simple-datatables';
import 'simple-datatables/dist/style.css';

const AiModelsTable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      new DataTable(tableRef.current, {
        paging: true,
        perPage: 5,
        perPageSelect: [5, 10, 15, 20, 25],
        sortable: false,
      });
    }
  }, []);

  return (
    <div className="overflow-x-auto">
      <table ref={tableRef} id="pagination-table" className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th>Model Name</th>
            <th>Developer</th>
            <th>Release Date</th>
            <th>Parameters</th>
            <th>Primary Application</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((model, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">{model.name}</td>
              <td>{model.developer}</td>
              <td>{model.releaseDate}</td>
              <td>{model.parameters}</td>
              <td>{model.application}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableData = [
  { name: 'GPT-4', developer: 'OpenAI', releaseDate: 'March 2023', parameters: '1 trillion', application: 'Natural Language Processing' },
  { name: 'BERT', developer: 'Google', releaseDate: 'October 2018', parameters: '340 million', application: 'Natural Language Understanding' },
  { name: 'DALL-E 2', developer: 'OpenAI', releaseDate: 'April 2022', parameters: '3.5 billion', application: 'Image Generation' },
  { name: 'T5', developer: 'Google', releaseDate: 'October 2019', parameters: '11 billion', application: 'Text-to-Text Transfer' },
  { name: 'GPT-3.5', developer: 'OpenAI', releaseDate: 'November 2022', parameters: '175 billion', application: 'Natural Language Processing' },
  { name: 'Codex', developer: 'OpenAI', releaseDate: 'August 2021', parameters: '12 billion', application: 'Code Generation' },
  { name: 'PaLM 2', developer: 'Google', releaseDate: 'May 2023', parameters: '540 billion', application: 'Multilingual Understanding' },
  { name: 'LaMDA', developer: 'Google', releaseDate: 'May 2021', parameters: '137 billion', application: 'Conversational AI' },
  { name: 'CLIP', developer: 'OpenAI', releaseDate: 'January 2021', parameters: '400 million', application: 'Image and Text Understanding' },
  { name: 'XLNet', developer: 'Google', releaseDate: 'June 2019', parameters: '340 million', application: 'Natural Language Processing' },
  { name: 'Meena', developer: 'Google', releaseDate: 'January 2020', parameters: '2.6 billion', application: 'Conversational AI' },
  { name: 'BigGAN', developer: 'Google', releaseDate: 'September 2018', parameters: 'Unlimited', application: 'Image Generation' },
  { name: 'Electra', developer: 'Google', releaseDate: 'March 2020', parameters: '14 million', application: 'Natural Language Understanding' },
  { name: 'Swin Transformer', developer: 'Microsoft', releaseDate: 'April 2021', parameters: '88 million', application: 'Vision Processing' },
  { name: 'GPT-NeoX-20B', developer: 'EleutherAI', releaseDate: 'April 2022', parameters: '20 billion', application: 'Natural Language Processing' },
  { name: 'Ernie 3.0', developer: 'Baidu', releaseDate: 'July 2021', parameters: '10 billion', application: 'Natural Language Processing' },
  { name: 'Turing-NLG', developer: 'Microsoft', releaseDate: 'February 2020', parameters: '17 billion', application: 'Natural Language Processing' },
  { name: 'Wu Dao 2.0', developer: 'Beijing Academy of AI', releaseDate: 'June 2021', parameters: '1.75 trillion', application: 'Multimodal Processing' },
  { name: 'Jukebox', developer: 'OpenAI', releaseDate: 'April 2020', parameters: '1.2 billion', application: 'Music Generation' },
  { name: 'StyleGAN2', developer: 'NVIDIA', releaseDate: 'February 2020', parameters: 'Unlimited', application: 'Image Generation' },
  { name: 'FLAN', developer: 'Google', releaseDate: 'December 2021', parameters: '137 billion', application: 'Few-shot Learning' },
  { name: 'GShard', developer: 'Google', releaseDate: 'June 2020', parameters: '600 billion', application: 'Multilingual Understanding' },
  { name: 'AlphaFold', developer: 'DeepMind', releaseDate: 'December 2020', parameters: 'Unknown', application: 'Protein Folding' },
  { name: 'GPT-J', developer: 'EleutherAI', releaseDate: 'June 2021', parameters: '6 billion', application: 'Natural Language Processing' },
  { name: 'M6', developer: 'Alibaba', releaseDate: 'December 2020', parameters: '10 billion', application: 'Multimodal Processing' },
  { name: 'Megatron-Turing NLG', developer: 'NVIDIA & Microsoft', releaseDate: 'October 2021', parameters: '530 billion', application: 'Natural Language Processing' },
  { name: 'DeepSpeed', developer: 'Microsoft', releaseDate: 'February 2020', parameters: 'Not disclosed', application: 'AI Training Optimization' },
];

export default AiModelsTable;
