import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { ITaxonomyPickerProps } from '../controls/taxonomyPicker/ITaxonomyPicker';
import { IPickerTerm } from '../controls/taxonomyPicker/ITermPicker';
import { ITermStore, ITermSet } from './ISPTermStorePickerService';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
/**
 * Service implementation to manage term stores in SharePoint
 */
export default class SPTermStorePickerService {
    private props;
    private context;
    private taxonomySession;
    private formDigest;
    private clientServiceUrl;
    /**
     * Service constructor
     */
    constructor(props: ITaxonomyPickerProps, context: IWebPartContext | ApplicationCustomizerContext);
    getTermLabels(termId: string): Promise<string[]>;
    /**
     * Gets the collection of term stores in the current SharePoint env
     */
    getTermStores(): Promise<ITermStore[]>;
    /**
     * Gets the current term set
     */
    getTermSet(): Promise<ITermSet>;
    /**
     * Retrieve all terms for the given term set
     * @param termset
     */
    getAllTerms(termset: string): Promise<ITermSet>;
    /**
     * Get the term set ID by its name
     * @param termstore
     * @param termset
     */
    private getTermSetId(termstore, termsetName);
    /**
     * Retrieve all terms that starts with the searchText
     * @param searchText
     */
    searchTermsByName(searchText: string): Promise<IPickerTerm[]>;
    /**
       * Searches terms for the given term set
       * @param searchText
       * @param termsetId
       */
    private searchTermsByTermSet(searchText, termSet);
    private isGuid(strGuid);
    /**
     * Sorting terms based on their path and depth
     *
     * @param terms
     */
    private sortTerms(terms);
    /**
     * Sort the terms by their path
     *
     * @param a term 2
     * @param b term 2
     */
    private sortTermByPath(a, b);
    /**
     * Clean the Guid from the Web Service response
     * @param guid
     */
    cleanGuid(guid: string): string;
    /**
     * Returns 3 fake SharePoint lists for the Mock mode
     */
    private getTermStoresFromMock();
    /**
     * Returns 3 fake SharePoint lists for the Mock mode
     */
    private getAllMockTerms();
}
