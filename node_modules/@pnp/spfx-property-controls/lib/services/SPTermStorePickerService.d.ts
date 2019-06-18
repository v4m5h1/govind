import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { IPickerTerm } from './../propertyFields/termPicker/IPropertyFieldTermPicker';
import { ITermStore, ITerm, IGroup, ITermSet, ISPTermStorePickerServiceProps, ISPTermStorePickerService, ITermSets } from './ISPTermStorePickerService';
/**
 * Service implementation to manage term stores in SharePoint
 */
export default class SPTermStorePickerService implements ISPTermStorePickerService {
    private props;
    private context;
    private clientServiceUrl;
    /**
     * Service constructor
     */
    constructor(props: ISPTermStorePickerServiceProps, context: IWebPartContext);
    /**
     * Gets the collection of term stores in the current SharePoint env
     */
    getTermStores(): Promise<ITermStore[]>;
    /**
     * Gets the current term set
     */
    getTermSets(): Promise<ITermSet[]>;
    /**
     * Get the term set ID by its name
     * @param termstore
     * @param termset
     */
    private getAllTermSets(termstore, termsetNameOrId);
    /**
     * Retrieve all terms for the given term set
     * @param termsetId
     */
    getAllTerms(termSet: ITermSet): Promise<ITerm[]>;
    /**
     * Retrieve all terms that starts with the searchText
     * @param searchText
     */
    searchTermsByName(searchText: string): Promise<IPickerTerm[]>;
    getGroupTermSets(group: IGroup): Promise<ITermSets>;
    /**
       * Searches terms for the given term set
       * @param searchText
       * @param termsetId
       */
    private searchTermsByTermSet(searchText, termSet);
    /**
     * Searches terms for a group
     * @param searchText
     */
    private searchTermsByGroup(searchText);
    /**
     * Searches terms in termstore
     * @param searchText
     */
    private searchAllTerms(searchText);
    /**
     * Returns 3 fake SharePoint lists for the Mock mode
     */
    private getTermStoresFromMock();
    /**
     * Returns 3 fake SharePoint lists for the Mock mode
     */
    private getAllMockTerms();
    private getTermGroupByTermSetId(termSetId, termStores);
}
