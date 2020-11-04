import { call, put } from 'redux-saga/effects';
import { AsyncActionCreatorBuilder, PayloadAction } from 'typesafe-actions';

// 이 코드는 출처가 어디인가요?
// 간단한 프로젝트는 이렇게 사용해주면 좋습니다.
// 복잡한 프로젝트의 경우에는 대부분 해당 코드를 풀어서 작성해 주는 식으로 합니다.
// 해당 액션이 성공했을 때 다른 액션을 호출한다거나 하는 경우가 있어서요.
type PromiseCreatorFunction<P, T> =
  | ((payload: P) => Promise<T>)
  | (() => Promise<T>);

function isPayloadAction<P>(action: any): action is PayloadAction<string, P> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return action.payload !== undefined;
}

export default function createAsyncSaga<T1, P1, T2, P2, T3, P3>(
  asyncActionCreator: AsyncActionCreatorBuilder<
    [T1, [P1, undefined]],
    [T2, [P2, undefined]],
    [T3, [P3, undefined]]
  >,
  promiseCreator: PromiseCreatorFunction<P1, P2>,
) {
  return function* saga(action: ReturnType<typeof asyncActionCreator.request>) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result = isPayloadAction<P1>(action)
        ? yield call(promiseCreator, action.payload)
        : yield call(promiseCreator);
      yield put(asyncActionCreator.success(result));
    } catch (e) {
      yield put(asyncActionCreator.failure(e));
    }
  };
}
