import * as React from 'react';
import { DateTime } from 'luxon';

export interface MainspringState<Date> {
  today: DateTime,
  isOpen: boolean,
  selectedDate: DateTime
}

export interface MainspringProps<Date> {
  children?: ChildrenFunction<Date>
  defaultSelectedDate?: DateTime,
  isOpen?: boolean, 
  selectedDate?: DateTime
}

export interface GetInputPropsOptions
  extends React.HTMLProps<HTMLInputElement> {}

export interface PropGetters<Date> {
  getInputProps: (options?: GetInputPropsOptions) => any
}

export type MainspringController<Date> = (
  MainspringState<Date> &
  PropGetters<Date>
)

export type ChildrenFunction<Date> = (options: MainspringController) => React.ReactNode

export type MainspringInterface<Date> = React.ComponentClass<MainspringProps<Date>>

declare const Mainspring: MainspringInterface<any>

export default Mainspring