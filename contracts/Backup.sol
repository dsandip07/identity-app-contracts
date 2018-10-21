pragma solidity ^0.4.8;


contract Backup {
    mapping(address => string) public _store;

    event Set (address indexed issuer, address indexed key, string value);

    function set(address key, string value) public {
        emit Set(msg.sender, key, value);
        _store[key] = value;
    }

    function get(address key) public view returns(string) {
        return _store[key];
    }
}