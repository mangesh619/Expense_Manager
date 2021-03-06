import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup filter default values',()=>{
    const state = filterReducer(undefined,{type:'@@INIT'});

    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
})

test('should set sortBy to amount',()=>{
    const state =filterReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date',()=>{
    const currentFilterState ={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const state = filterReducer(currentFilterState,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set text value of filter',()=>{
    const text ='abc';
    const action={
        type:'SET_TEXT_FILTER',
        text
    }
    const state = filterReducer(undefined,action);
    
    expect(state.text).toBe(text);
})

test('should set start date',()=>{
    const startDate =moment();
    const action = {
        type:'SET_START_DATE',
        startDate
    }
    const state = filterReducer(undefined,action);

    expect(state.startDate).toEqual(startDate);
})

test('should set end date',()=>{
    const endDate = moment();
    const action = {
        type:'SET_END_DATE',
        endDate
    }
    const state = filterReducer(undefined,action);

    expect(state.endDate).toEqual(endDate);
})