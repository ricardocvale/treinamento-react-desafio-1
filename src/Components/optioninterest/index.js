import { OptionInterestStyled } from "./styles";

export default function OptionInterest({ textOption, selected = false, value, onSelectInterestOption }) {

    function selectInterestOption(valueOption) {
        onSelectInterestOption(valueOption);
    }

    return (
        <OptionInterestStyled type="button" selected={selected} value={value} onClick={event => selectInterestOption(event.target.value)} >
            {textOption}
        </OptionInterestStyled>
    )

}