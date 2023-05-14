'use client';

import { useState } from 'react';
import { useAction } from 'trpc-api';
import { testInlinedMutation } from './TestMutation_action';

export function TestMutation() {
  const [text, setText] = useState('');
  const mutation = useAction(testInlinedMutation);
  mutation.status;
  //        ^?
  return (
    <>
      <input
        type={'text'}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-slate-300 text-slate-900"
      />
      <button
        onClick={() =>
          mutation.mutate({
            text: 'world',
          })
        }
      >
        Run server action
      </button>

      <button
        onClick={() =>
          testInlinedMutation({
            text: 'hello',
          })
        }
      >
        Run server action raw debugging
      </button>

      <pre>{JSON.stringify(mutation, null, 4)}</pre>
    </>
  );
}
